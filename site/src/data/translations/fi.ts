import type { PageContent } from '../types';
import { portfolioFacadeImages, portfolioHouseImages, portfolioInteriorImages } from '../portfolio-images';

export const fi: PageContent = {
	langLabel: 'FI',
	metaTitle: 'CORBETTI OÜ | Rakentaminen ja remontointi',
	metaDescription:
		'CORBETTI OÜ toteuttaa rakennus-, remontti-, julkisivu-, betoni- ja sisäviimeistelytöitä yksityisille asiakkaille, yrityksille ja taloyhtiöille.',
	nav: {
		services: 'Palvelut',
		portfolio: 'Referenssit',
		process: 'Prosessi',
		clients: 'Asiakkaat',
		contact: 'Yhteydenotto',
	},
	hero: {
		eyebrow: 'CORBETTI OÜ · rakennusyritys Virossa',
		title: 'Rakennus- ja remonttityöt samalta tiimiltä.',
		description:
			'Toteutamme rakentamisen, remontoinnin ja sisätyöt alusta loppuun yksityisasiakkaille, yrityksille ja taloyhtiöille.',
		primaryCta: 'Lähetä kysely',
		secondaryCta: 'Katso työt',
		stats: [
			{ value: 'B2C / B2B', label: 'yksityiset ja yritykset' },
			{ value: 'Kokonaisuus', label: 'valmistelusta viimeistelyyn' },
			{ value: 'Viro', label: 'eri tyyppiset kohteet' },
		],
	},
	intro: {
		kicker: 'Laaja palveluvalikoima',
		title: 'Rakennamme, uudistamme ja viimeistelemme.',
		body:
			'CORBETTI OÜ tarjoaa yleisrakentamista, peruskorjauksia, julkisivutöitä, betoni- ja perustustöitä, ikkunoiden ja ovien asennusta, kipsilevyrakenteita, purkutöitä, puusepäntöitä ja pienempiä korjaustöitä.',
		badges: ['Yksityisasiakkaille', 'Yrityksille', 'Taloyhtiöille', 'Käytännöllinen toteutus'],
	},
	services: {
		kicker: 'Pääpalvelut',
		title: 'Mitä CORBETTI OÜ tekee',
		body: 'Sivuston rakenne kokoaa tärkeimmät palvelut selkeäksi kokonaisuudeksi.',
		cards: [
			{
				title: 'Talojen rakentaminen ja laajennukset',
				text: 'Kokonaisratkaisut omakotitaloihin ja pienempiin rakennuksiin.',
				items: ['Omakotitalot', 'Saunat ja autotallit', 'Terassit ja katokset'],
			},
			{
				title: 'Huoneistojen ja tilojen remontointi',
				text: 'Peruskorjaukset koteihin, toimistoihin ja yhteiskäyttöisiin tiloihin.',
				items: ['Peruskorjaus', 'Asuntoremontit', 'Liiketilat'],
			},
			{
				title: 'Betoni ja perustukset',
				text: 'Luotettavat runko- ja perustustyöt eri kohteisiin.',
				items: ['Perustusten valu', 'Vedeneristys ja eristys', 'Portaat ja kulkuväylät'],
			},
			{
				title: 'Julkisivut ja eristys',
				text: 'Ulkotyöt, joissa yhdistyvät kestävyys, energiatehokkuus ja siisti ulkonäkö.',
				items: ['Julkisivun viimeistely', 'Lämmöneristys', 'Parveke-eristys'],
			},
			{
				title: 'Sisäviimeistely ja kipsilevy',
				text: 'Selkeät ratkaisut katoille, väliseinille, seinille ja lattioille.',
				items: ['Alakatot', 'Väliseinät', 'Lattia- ja seinäpinnoitteet'],
			},
			{
				title: 'Purku ja asennus',
				text: 'Valmistelutyöt, asennukset ja pienemmät toteutukset samalla kumppanilla.',
				items: ['Purku', 'Ikkunat ja ovet', 'Aidat ja portit'],
			},
		],
	},
	clients: {
		kicker: 'Asiakkaat',
		title: 'Sopii sekä yksittäisiin että laajempiin kohteisiin',
		body: 'Yritys toimii joustavasti eri tilaajaryhmien kanssa ja mukautuu kohteen kokoon.',
		cards: [
			{ title: 'Yksityisasiakkaat', text: 'Kodit, asunnot, terassit, autotallit ja kohdennetut korjaukset.' },
			{ title: 'Yritykset', text: 'Toimistot, liiketilat, tuotantotilat ja vaiheittainen toteutus.' },
			{ title: 'Taloyhtiöt', text: 'Yhteiset tilat, julkisivut, porraskäytävät ja rakennuksen parannukset.' },
		],
	},
	process: {
		kicker: 'Toimintatapa',
		title: 'Selkeä eteneminen kyselystä luovutukseen',
		steps: [
			{ title: '1. Kartoitus', text: 'Käymme läpi kohteen, työn laajuuden, aikataulun ja tavoitteet.' },
			{ title: '2. Tarjous', text: 'Määrittelemme työn sisällön, vaiheet ja hinnoittelun selkeästi.' },
			{ title: '3. Toteutus', text: 'Rakennus- ja remonttityöt etenevät sovittujen vaiheiden mukaan.' },
			{ title: '4. Luovutus', text: 'Tarkistamme lopputuloksen ja viimeistelemme kohteen käyttövalmiiksi.' },
		],
	},
	portfolio: {
		kicker: 'Työmme',
		title: 'CORBETTI OÜ:n oikeita kohteita',
		items: [
			{
				title: 'Pientalo ja tärkeimmät rakennusvaiheet',
				text: 'Yksi kohde kymmenen kuvan kokonaisuutena julkisivusta portaisiin ja sisätöihin.',
				images: portfolioHouseImages,
			},
			{
				title: 'Katot, väliseinät ja tekniset yksityiskohdat',
				text: 'Työvaihekuvia kattorakenteista, eristyksestä, väliseinistä ja teknisestä valmistelusta.',
				images: portfolioInteriorImages,
			},
			{
				title: 'Julkisivut, aukot ja sisäviimeistely',
				text: 'Lisää oikeita CORBETTI OÜ:n työkuvia ulko-osista ja pidemmälle edenneistä sisätiloista.',
				images: portfolioFacadeImages,
			},
		],
	},
	contact: {
		kicker: 'Seuraava kohde',
		title: 'Keskustellaan projektistasi',
		body: 'Kerro kohteen sijainti, työn tyyppi ja aikataulu. CORBETTI OÜ vastaanottaa yhteydenotot puhelimitse ja Telegramissa.',
		primaryAction: 'Soita',
		primaryHref: 'tel:+37256333338',
		secondaryAction: 'Kirjoita Telegramissa',
		secondaryHref: 'https://t.me/corbetti_build',
		form: {
			title: 'Yhteydenottolomake',
			nameLabel: 'Nimi',
			phoneLabel: 'Puhelin',
			locationLabel: 'Kohteen osoite',
			workTypeLabel: 'Työn tyyppi',
			messageLabel: 'Kuvaile työtä',
			submitLabel: 'Lähetä Telegramiin',
			telegramNotice: 'Lomake valmistelee lähetettävän Telegram-viestin.',
		},
		cards: [
			{ label: 'Puhelin', value: '+372 5633 3338' },
			{ label: 'Telegram', value: '@corbetti_build' },
			{ label: 'Kielet', value: 'Eesti, русский, English, Suomi, Svenska' },
			{ label: 'Asiakasryhmät', value: 'Yksityiset, yritykset, taloyhtiöt' },
			{ label: 'Painopiste', value: 'Rakentaminen, remontointi, julkisivut, betoni, sisätyöt' },
		],
		note: 'Saat nopeamman vastauksen, kun lähetät Telegramissa lyhyen kuvauksen työstä, osoitteen ja toivotun aikataulun.',
	},
	footer: {
		company: 'CORBETTI OÜ',
		rights: 'Monikielinen rakennus- ja remontointikumppani.',
	},
};
