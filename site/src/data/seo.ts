import type { Locale } from './site';

export const organizationName = 'CORBETTI OÜ';
export const organizationIdPath = '/#organization';

export const businessLanguages: Locale[] = ['et', 'ru', 'en', 'fi', 'sv'];

export const businessAreaServed = [
	{
		'@type': 'City',
		name: 'Tallinn',
	},
	{
		'@type': 'AdministrativeArea',
		name: 'Harju County',
		alternateName: ['Harjumaa', 'Харьюмаа'],
	},
	{
		'@type': 'Country',
		name: 'Estonia',
	},
];

export const businessAddress = {
	'@type': 'PostalAddress',
	addressCountry: 'EE',
	addressRegion: 'Harju County',
};

export const businessServiceTypes = [
	'Apartment renovation',
	'House construction',
	'Facade works',
	'Concrete works',
	'Window and door installation',
	'Interior finishing',
	'Demolition works',
];
