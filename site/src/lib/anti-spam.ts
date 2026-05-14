type RateLimitOptions = {
	key: string;
	limit: number;
	windowMs: number;
};

type RateLimitBucket = {
	count: number;
	resetAt: number;
};

const buckets = new Map<string, RateLimitBucket>();

export const getClientIp = (request: Request) => {
	const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
	const realIp = request.headers.get('x-real-ip')?.trim();

	return forwardedFor || realIp || 'unknown';
};

export const isRateLimited = ({ key, limit, windowMs }: RateLimitOptions) => {
	const now = Date.now();
	const existing = buckets.get(key);

	if (!existing || existing.resetAt <= now) {
		buckets.set(key, { count: 1, resetAt: now + windowMs });
		return false;
	}

	existing.count += 1;
	return existing.count > limit;
};

export const hasHoneypotValue = (value: unknown) => String(value ?? '').trim().length > 0;
