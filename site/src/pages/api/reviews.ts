import { addStoredReview, getStoredReviews } from '../../lib/reviews';
import { getClientIp, hasHoneypotValue, isRateLimited } from '../../lib/anti-spam';

export const prerender = false;

type ReviewPayload = {
	name?: string;
	message?: string;
	rating?: number | string;
	locale?: string;
	companyWebsite?: string;
};

const normalizeReviewMessage = (value: string) => {
	const trimmed = value.trim();
	const lines = trimmed.split(/\r?\n/);
	const firstLine = lines[0]?.trim() ?? '';
	const hasOnlySymbols =
		firstLine.length > 0 &&
		firstLine.length <= 12 &&
		!/[\p{L}\p{N}]/u.test(firstLine) &&
		!/[.,!?;:]/.test(firstLine);

	if (hasOnlySymbols && lines.length > 1) {
		return lines.slice(1).join('\n').trim();
	}

	return trimmed;
};

const extractRatingFromMessage = (value: string) => {
	const firstLine = value.trim().split(/\r?\n/)[0]?.trim() ?? '';
	const starMatches = firstLine.match(/[^\s]/g);

	return starMatches?.length ?? 0;
};

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});

export const GET = async () => {
	const reviews = await getStoredReviews();
	return json({ ok: true, reviews });
};

export const POST = async ({ request }: { request: Request }) => {
	let payload: ReviewPayload;

	try {
		payload = (await request.json()) as ReviewPayload;
	} catch {
		return json({ ok: false, error: 'Invalid request.' }, 400);
	}

	const clientIp = getClientIp(request);

	if (hasHoneypotValue(payload.companyWebsite)) {
		return json({ ok: true }, 202);
	}

	if (isRateLimited({ key: `reviews:${clientIp}`, limit: 3, windowMs: 10 * 60 * 1000 })) {
		return json({ ok: false, error: 'Too many requests. Please try again later.' }, 429);
	}

	const name = String(payload.name ?? '').trim();
	const rawMessage = String(payload.message ?? '');
	const message = normalizeReviewMessage(rawMessage);
	const locale = String(payload.locale ?? '').trim() || 'et';
	const rating = Number(payload.rating ?? extractRatingFromMessage(rawMessage));

	if (!name || !message || !Number.isFinite(rating) || rating < 1 || rating > 5) {
		return json({ ok: false, error: 'Required fields are missing.' }, 400);
	}

	const review = await addStoredReview({
		name: name.slice(0, 80),
		message: message.slice(0, 1500),
		rating,
		locale,
	});

	return json({ ok: true, review }, 201);
};
