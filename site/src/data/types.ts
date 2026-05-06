export type PageContent = {
	langLabel: string;
	metaTitle: string;
	metaDescription: string;
	nav: {
		home: string;
		services: string;
		portfolio: string;
		process: string;
		clients: string;
		faq: string;
		contact: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
		stamp: string;
		stats: Array<{ value: string; label: string }>;
	};
	intro: {
		kicker: string;
		title: string;
		body: string;
		badges: string[];
	};
	services: {
		kicker: string;
		title: string;
		body: string;
		cards: Array<{ title: string; text: string; items: string[] }>;
	};
	clients: {
		kicker: string;
		title: string;
		body: string;
		cards: Array<{ title: string; text: string }>;
	};
	reviews?: {
		kicker: string;
		title: string;
		body: string;
		sourceLabel: string;
		actionLabel: string;
		stats: Array<{ value: string; label: string }>;
		items: Array<{
			author: string;
			task: string;
			time: string;
			quote: string;
		}>;
		form: {
			title: string;
			nameLabel: string;
			ratingLabel: string;
			messageLabel: string;
			submitLabel: string;
			submittingLabel: string;
			successMessage: string;
			errorMessage: string;
			successTitle: string;
			successBody: string;
		};
	};
	process: {
		kicker: string;
		title: string;
		steps: Array<{ title: string; text: string }>;
		certificates?: {
			title: string;
			items: Array<{ name: string; number: string }>;
		};
	};
	portfolio: {
		kicker: string;
		title: string;
		items: Array<{ title: string; text: string; images: string[]; coverImage?: string }>;
	};
	faq: {
		kicker: string;
		title: string;
		body: string;
		categories: Array<{
			title: string;
			items: Array<{
				question: string;
				answer: string;
			}>;
		}>;
	};
	contact: {
		kicker: string;
		title: string;
		body: string;
		phoneLabel: string;
		phone: string;
		emailLabel: string;
		email: string;
		emailAction: string;
		primaryAction: string;
		primaryHref: string;
		secondaryAction: string;
		secondaryHref: string;
		form: {
			title: string;
			nameLabel: string;
			phoneLabel: string;
			locationLabel: string;
			workTypeLabel: string;
			messageLabel: string;
			submitLabel: string;
			submittingLabel: string;
			successMessage: string;
			errorMessage: string;
			telegramNotice: string;
		};
		cards: Array<{ label: string; value: string }>;
		note: string;
	};
	footer: {
		company: string;
		rights: string;
	};
};
