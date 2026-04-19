export type PageContent = {
	langLabel: string;
	metaTitle: string;
	metaDescription: string;
	nav: {
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
	process: {
		kicker: string;
		title: string;
		steps: Array<{ title: string; text: string }>;
	};
	portfolio: {
		kicker: string;
		title: string;
		items: Array<{ title: string; text: string; images: string[] }>;
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
