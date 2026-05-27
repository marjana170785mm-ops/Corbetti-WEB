import type { PageContent } from './types';
import { en } from './translations/en';
import { et } from './translations/et';
import { fi } from './translations/fi';
import { ru } from './translations/ru';
import { sv } from './translations/sv';

export const locales = ['et', 'ru', 'en', 'fi', 'sv'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
	et: 'Eesti',
	ru: 'Русский',
	en: 'English',
	fi: 'Suomi',
	sv: 'Svenska',
};

export const siteContent: Record<Locale, PageContent> = {
	et,
	ru,
	en,
	fi,
	sv,
};
