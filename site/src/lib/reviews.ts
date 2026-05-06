import { promises as fs } from 'node:fs';
import path from 'node:path';

export type StoredReview = {
	id: string;
	name: string;
	message: string;
	rating: number;
	locale: string;
	createdAt: string;
};

type ReviewStoreShape = {
	reviews: StoredReview[];
};

const REVIEWS_DIRECTORY = path.resolve(process.cwd(), 'storage');
const REVIEWS_FILE = path.join(REVIEWS_DIRECTORY, 'reviews.json');

const defaultReviewStore = (): ReviewStoreShape => ({
	reviews: [],
});

const isTestReview = (review: StoredReview) =>
	review.name.trim().toLowerCase() === 'marina' && review.message.trim().toLowerCase() === 'проверка';

const normalizeStoredReview = (review: Partial<StoredReview>): StoredReview | null => {
	const name = String(review.name ?? '').trim();
	const message = String(review.message ?? '').trim();
	const locale = String(review.locale ?? '').trim() || 'et';
	const rating = Number(review.rating ?? 5);
	const createdAt = String(review.createdAt ?? '').trim();
	const id = String(review.id ?? '').trim();

	if (!name || !message || !id || !createdAt) {
		return null;
	}

	return {
		id,
		name,
		message,
		locale,
		rating: Number.isFinite(rating) ? Math.max(1, Math.min(5, Math.round(rating))) : 5,
		createdAt,
	};
};

const ensureReviewStore = async () => {
	await fs.mkdir(REVIEWS_DIRECTORY, { recursive: true });

	try {
		await fs.access(REVIEWS_FILE);
	} catch {
		await fs.writeFile(REVIEWS_FILE, JSON.stringify(defaultReviewStore(), null, 2), 'utf-8');
	}
};

const readReviewStore = async (): Promise<ReviewStoreShape> => {
	await ensureReviewStore();

	try {
		const raw = await fs.readFile(REVIEWS_FILE, 'utf-8');
		const parsed = JSON.parse(raw) as Partial<ReviewStoreShape>;
		const normalizedReviews = Array.isArray(parsed.reviews)
			? parsed.reviews
					.map((review) => normalizeStoredReview(review))
					.filter((review): review is StoredReview => review !== null)
			: [];
		const reviews = normalizedReviews.filter((review) => !isTestReview(review));

		if (reviews.length !== normalizedReviews.length) {
			await writeReviewStore({ reviews });
		}

		return { reviews };
	} catch {
		return defaultReviewStore();
	}
};

const writeReviewStore = async (store: ReviewStoreShape) => {
	await ensureReviewStore();
	await fs.writeFile(REVIEWS_FILE, JSON.stringify(store, null, 2), 'utf-8');
};

export const getStoredReviews = async () => {
	const store = await readReviewStore();

	return [...store.reviews].sort((left, right) => {
		const leftTime = Date.parse(left.createdAt);
		const rightTime = Date.parse(right.createdAt);
		return rightTime - leftTime;
	});
};

export const addStoredReview = async (input: {
	name: string;
	message: string;
	rating: number;
	locale?: string;
}) => {
	const store = await readReviewStore();
	const review: StoredReview = {
		id: crypto.randomUUID(),
		name: input.name.trim(),
		message: input.message.trim(),
		rating: Math.max(1, Math.min(5, Math.round(input.rating))),
		locale: String(input.locale ?? 'et').trim() || 'et',
		createdAt: new Date().toISOString(),
	};

	store.reviews.unshift(review);
	await writeReviewStore(store);

	return review;
};
