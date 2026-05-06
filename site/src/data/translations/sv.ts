import type { PageContent } from '../types';
import {
	portfolioConcreteImages,
	portfolioDemolitionImages,
	portfolioFacadeImages,
	portfolioFloorRepairImages,
	portfolioHeatBoxImages,
	portfolioHouseImages,
	portfolioPremisesRepairImages,
	portfolioRegipsImages,
	portfolioScaffoldImages,
	portfolioToljanImages,
	portfolioWindowInstallImages,
} from '../portfolio-images';

export const sv: PageContent = {
	langLabel: 'SV',
	metaTitle: 'CORBETTI OÜ | Bygg och renovering',
	metaDescription:
		'CORBETTI OÜ utför bygg-, renoverings-, fasad-, betong- och inredningsarbeten för privatkunder, företag och bostadsrättsföreningar.',
	nav: {
		home: 'Hem',
		services: 'Tjänster',
		portfolio: 'Projekt',
		process: 'Process',
		clients: 'Kunder',
		faq: 'FAQ',
		contact: 'Kontakt',
	},
	hero: {
		eyebrow: 'CORBETTI OÜ · byggföretag i Estland',
		title: 'Bygg, renovering och finish från samma team.',
		description:
			'Vi genomför bygg- och renoveringsarbeten från första förberedelse till färdigt resultat för privatkunder, företag och bostadsrättsföreningar.',
		primaryCta: 'Skicka förfrågan',
		secondaryCta: 'Se projekt',
		stamp: 'Över 15 års erfarenhet inom bygg',
		stats: [
			{ value: 'B2C / B2B', label: 'privata och kommersiella kunder' },
			{ value: 'Helhet', label: 'från start till finish' },
			{ value: 'Estland', label: 'olika typer av objekt' },
		],
	},
	intro: {
		kicker: 'Brett tjänsteutbud',
		title: 'Vi bygger, förnyar och färdigställer.',
		body:
			'CORBETTI OÜ erbjuder allmänna byggarbeten, totalrenovering, fasadarbeten, betong och grund, montering av fönster och dörrar, gipssystem, rivning, snickeri och mindre reparationsjobb.',
		badges: ['Privatkunder', 'Företag', 'Föreningar', 'Praktiskt utförande'],
	},
	services: {
		kicker: 'Huvudområden',
		title: 'Tjänster från CORBETTI OÜ',
		body: 'Strukturen nedan lyfter fram företagets viktigaste arbetsområden i ett tydligare format.',
		cards: [
			{
				title: 'Husbyggen och tillbyggnader',
				text: 'Helhetslösningar för småhus och mindre byggnader.',
				items: ['Privathus', 'Bastu och garage', 'Terrasser och skärmtak'],
			},
			{
				title: 'Renovering av bostäder och lokaler',
				text: 'Större renoveringar i hem, kontor och gemensamma utrymmen.',
				items: ['Totalrenovering', 'Lägenhetsrenovering', 'Kommersiella lokaler'],
			},
			{
				title: 'Betong och grundarbeten',
				text: 'Stabila underlag och konstruktiva lösningar för olika objekt.',
				items: ['Grundgjutning', 'Tätskikt och isolering', 'Trappor och gångar'],
			},
			{
				title: 'Fasader och isolering',
				text: 'Utvändiga arbeten med fokus på hållbarhet, energi och uttryck.',
				items: ['Fasadfinish', 'Värmeisolering', 'Balkongisolering'],
			},
			{
				title: 'Invändig finish och gips',
				text: 'Genomtänkta system för tak, väggar, golv och rumsindelning.',
				items: ['Undertak', 'Innerväggar', 'Golv- och väggytor'],
			},
			{
				title: 'Rivning och montage',
				text: 'Förberedelser, montering och mindre arbeten runt fastigheten.',
				items: ['Rivning', 'Fönster och dörrar', 'Staket och portar'],
			},
		],
	},
	clients: {
		kicker: 'Kunder',
		title: 'Anpassat för både mindre och större uppdrag',
		body: 'Bolaget arbetar flexibelt med olika beställartyper och projektstorlekar.',
		cards: [
			{ title: 'Privatkunder', text: 'Hem, lägenheter, terrasser, garage och riktade reparationsarbeten.' },
			{ title: 'Företag', text: 'Kontor, kommersiella ytor, industrilokaler och etappvis utförande.' },
			{ title: 'Bostadsrättsföreningar', text: 'Gemensamma ytor, fasader, trapphus och tekniska uppgraderingar.' },
		],
	},
	reviews: {
		kicker: 'Omdömen',
		title: '',
		body: '',
		sourceLabel: '',
		actionLabel: 'Lämna omdöme',
		stats: [
			{ value: '5.0 / 5', label: 'genomsnittsbetyg' },
			{ value: '100%', label: 'positiva omdömen' },
			{ value: '2', label: 'offentliga omdömen' },
		],
		items: [
			{
				author: 'Anna-Elina O.',
				task: 'Montering av kökslampa',
				time: '2 år sedan',
				quote: 'Suur aitäh tegijale hea töö eest. Soovitan tegijat teistele klientidele.',
			},
			{
				author: 'Andrei',
				task: 'Annat arbete',
				time: '2 år sedan',
				quote: 'Suurepärane professionaalide meeskond, soovitan. Отличьная команда проффесионалов ,рекомендую',
			},
		],
		form: {
			title: 'Lämna omdöme',
			nameLabel: 'Ditt namn',
			ratingLabel: 'Betyg',
			messageLabel: 'Ditt omdöme',
			submitLabel: 'Skicka omdöme',
			submittingLabel: 'Skickar...',
			successMessage: 'Tack. Ditt omdöme har skickats.',
			errorMessage: 'Det gick inte att skicka omdömet. Försök igen.',
			successTitle: 'Tack för ditt omdöme',
			successBody: 'Vi har tagit emot ditt meddelande och går igenom omdömet snart.',
		},
	},
	process: {
		kicker: 'Arbetssätt',
		title: 'Tydlig väg från förfrågan till färdigt objekt',
		steps: [
			{ title: '1. Genomgång', text: 'Vi går igenom platsen, omfattningen, tidsplanen och målen.' },
			{ title: '2. Offert', text: 'Vi sätter en tydlig arbetsomfattning, ordning och prismodell.' },
			{ title: '3. Utförande', text: 'Bygg- och renoveringsarbetet sker stegvis enligt överenskommelse.' },
			{ title: '4. Överlämning', text: 'Vi kontrollerar resultatet, slutför detaljerna och gör objektet redo för användning.' },
		],
		certificates: {
			title: 'Våra certifikat',
			items: [
				{ name: 'Arbetssakerhetskort', number: '1489679211460' },
				{ name: 'Hot Work Certificate', number: '12204841124304' },
			],
		},
	},
	portfolio: {
		kicker: 'Våra arbeten',
		title: 'Verkliga CORBETTI OÜ-projekt',
		items: [
			{
				title: 'Privat hus: byggskeden',
				text: '',
				images: portfolioHouseImages,
			},
			{
				title: 'Fasadarbeten',
				text: '',
				images: portfolioFacadeImages,
			},
			{
				title: 'Byggställningstjänster',
				text: '',
				images: portfolioScaffoldImages,
			},
			{
				title: 'Fönstermontage',
				text: '',
				images: portfolioWindowInstallImages,
			},
			{
				title: 'Betongarbeten',
				text: '',
				images: portfolioConcreteImages,
			},
			{
				title: 'Rivningsarbeten',
				text: '',
				images: portfolioDemolitionImages,
			},
			{
				title: 'Montering av skåp för värmecentral',
				text: '',
				images: portfolioHeatBoxImages,
			},
			{
				title: 'Renovering av lokaler',
				text: '',
				images: portfolioPremisesRepairImages,
			},
			{
				title: 'Golvreparation',
				text: '',
				images: portfolioFloorRepairImages,
			},
			{
				title: 'Gipsskivearbeten',
				text: '',
				images: portfolioRegipsImages,
			},
			{
				title: 'Bygg- och finishskeden',
				text: '',
				images: portfolioToljanImages,
			},
		],
	},
	faq: {
		kicker: 'Frågor och svar',
		title: '',
		body: '',
		categories: [
			{
				title: 'El',
				items: [
					{ question: 'Hur installerar man ett vägguttag på rätt sätt?', answer: 'Installation av ett uttag innebär att strömmen bryts, ledningarna förbereds och ansluts korrekt till terminalerna. Fel kan leda till kortslutning eller brand, därför är det bäst att låta en specialist göra arbetet.' },
					{ question: 'Kan jag byta en strömbrytare själv?', answer: 'Ja, om du har grundläggande kunskap och följer säkerhetsreglerna. Vid minsta tvekan är det bättre att anlita en fackman, eftersom arbetet är litet men ändå ansvarskrävande.' },
					{ question: 'Hur märker man att eldragningen är gammal och behöver bytas?', answer: 'Vanliga tecken är säkringar som löser ut, varma uttag, gamla aluminiumledningar, gnistor eller bränd lukt. I sådana fall bör bytet inte skjutas upp.' },
					{ question: 'Vad kostar ny eldragning?', answer: 'Priset beror på ytan, antalet punkter och arbetets komplexitet. Det kan variera från enklare budgetlösningar till en fullständig nyinstallation. Exakt pris ges efter besiktning.' },
					{ question: 'Var bör uttag placeras i köket?', answer: 'Uttagen bör finnas nära apparaterna: kylskåp, spis, vattenkokare och mikrovågsugn. Det är viktigt att planera tillräckligt många från början så att förlängningskablar inte behövs senare.' },
					{ question: 'Hur många uttag behövs i ett rum?', answer: 'Minst 4 till 6, men ofta är fler bättre för TV, laddare och belysning. Moderna bostäder behöver normalt fler uttag än äldre planlösningar.' },
					{ question: 'Hur döljer man kablar i väggen?', answer: 'Kablarna läggs i spår i väggen och täcks sedan med puts. Det är ett dammigt och tekniskt krävande arbete som kräver rätt verktyg och erfarenhet.' },
				],
			},
			{
				title: 'Väggfinish',
				items: [
					{ question: 'Hur förbereder man väggar för målning?', answer: 'Ta bort den gamla ytan, jämna av väggen, spackla och grunda. Utan förarbete blir färgen ojämn.' },
					{ question: 'Måste väggar grundas före målning?', answer: 'Ja, absolut. Grundfärg förbättrar vidhäftningen och minskar färgåtgången.' },
					{ question: 'Hur spacklar man väggar på rätt sätt?', answer: 'Spackel läggs normalt i flera lager med slipning mellan lagren. Det är viktigt att hålla ytan jämn och lagertjockleken rätt.' },
					{ question: 'Hur blandar man spackel utan klumpar?', answer: 'Pulvret hälls i vatten, inte tvärtom, och blandas med en mixer. Rätta proportioner är också viktiga.' },
					{ question: 'Hur många lager spackel behövs?', answer: 'Vanligtvis 2 till 3 lager: ett grundlager och ett finishlager. Det beror på väggarnas skick.' },
					{ question: 'Hur jämnar man ut väggar?', answer: 'Större ojämnheter tas bort med puts, mindre fel med spackel. I vissa fall används gipsskivor.' },
					{ question: 'Vad är bättre: tapet eller målning?', answer: 'Målning känns modern och är lätt att fräscha upp senare. Tapet döljer små fel enklare. Valet beror på budget och mål.' },
				],
			},
			{
				title: 'Kakel och klinker',
				items: [
					{ question: 'Hur lägger man kakel rakt?', answer: 'Underlaget måste vara jämnt och man behöver vattenpass samt kakelkryss. Utan erfarenhet är det svårt att få ett riktigt fint resultat.' },
					{ question: 'Hur väljer man kakel till badrum?', answer: 'Det är viktigt att titta på fukttålighet, halkskydd och hållbarhet.' },
					{ question: 'Hur skär man kakel utan flisor?', answer: 'Man använder kakelskärare eller annat lämpligt specialverktyg. Utan rätt verktyg är materialet lätt att förstöra.' },
					{ question: 'Vad kostar kakelsättning?', answer: 'Priset beror på plattornas storlek, mönstrets komplexitet och underlagets förberedelse. Det räknas oftast per kvadratmeter.' },
					{ question: 'Vad gör man om en platta har lossnat?', answer: 'Det gamla limmet tas bort, ytan rengörs och plattan fästs på nytt. Om problemet är omfattande kan större omarbetning behövas.' },
				],
			},
			{
				title: 'Golv',
				items: [
					{ question: 'Vilket golv är bättre: laminat eller klinker?', answer: 'Laminat känns varmare och mer hemtrevligt, medan klinker är mer slitstarkt och fukttåligt. Ofta är en kombination den bästa lösningen.' },
					{ question: 'Hur lägger man laminat?', answer: 'Det läggs på ett jämnt underlag med underlagsmatta och expansionsfog mot väggarna. Om metoden är fel kan golvet svälla senare.' },
					{ question: 'Måste golvet jämnas före läggning?', answer: 'Ja. Ojämnheter leder till knarr och kan orsaka skador.' },
					{ question: 'Vad gör man om golvet knarrar?', answer: 'Orsaken är oftast ojämnt underlag eller dålig läggning. Delvis eller fullständig reparation kan behövas.' },
					{ question: 'Hur väljer man golvvärme?', answer: 'Det finns elektrisk och vattenburen golvvärme. Valet beror på rummet och budgeten.' },
				],
			},
			{
				title: 'VVS',
				items: [
					{ question: 'Hur installerar man en toalett?', answer: 'Det kräver exakt anslutning till avloppet och noggrann tätning. Fel leder lätt till läckage.' },
					{ question: 'Hur byter man en blandare?', answer: 'Stäng av vattnet, ta bort den gamla blandaren och montera den nya med korrekt tätning. Arbetet är inte svårt men kräver noggrannhet.' },
					{ question: 'Varför droppar kranen och vad gör man?', answer: 'Oftast är packningarna eller patronen utslitna. De delarna behöver bytas.' },
					{ question: 'Hur rensar man rör?', answer: 'Hushållsmedel kan hjälpa vid mindre stopp, men vid allvarligare problem behövs vanligtvis en specialist.' },
					{ question: 'Vad kostar byte av VVS?', answer: 'Det beror på arbetets omfattning och vilken utrustning som väljs. Priset räknas individuellt.' },
				],
			},
			{
				title: 'Allmän renovering',
				items: [
					{ question: 'Var börjar man med en lägenhetsrenovering?', answer: 'Börja med en plan och en budget. Det är viktigt att tänka igenom alla steg i förväg.' },
					{ question: 'I vilken ordning ska renoveringen göras?', answer: 'Först grovarbeten, sedan finish: väggar, golv och tak.' },
					{ question: 'Kan man renovera på vintern?', answer: 'Ja, men vissa material och temperaturkrav innebär begränsningar.' },
					{ question: 'Vad kostar en nyckelfärdig renovering?', answer: 'Priset beror på bostadens skick och önskad omfattning. Det räknas efter besiktning.' },
					{ question: 'Hur väljer man byggfirma?', answer: 'Titta på erfarenhet, omdömen, avtalsvillkor och garanti.' },
				],
			},
			{
				title: 'Små men nyttiga jobb',
				items: [
					{ question: 'Hur sätter man upp en hylla på väggen?', answer: 'Man behöver välja rätt infästningar för väggtypen och märka hålen noggrant.' },
					{ question: 'Hur borrar man i en vägg utan sprickor?', answer: 'Använd rätt borr och tryck inte för hårt.' },
					{ question: 'Hur lagar man en spricka i väggen?', answer: 'Rengör sprickan, grunda ytan och fyll den med spackel.' },
					{ question: 'Hur tar man bort gammal tapet?', answer: 'Fukta den med vatten eller särskild lösning och ta bort den med spackelspade.' },
					{ question: 'Hur målar man ett tak utan ränder?', answer: 'Använd en bra roller och applicera färgen jämnt i flera lager.' },
				],
			},
		],
	},
	contact: {
		kicker: 'Kontakt',
		title: 'Ring oss eller skicka en förfrågan för offert',
		body: 'Beskriv typ av arbete, objektets adress och önskad tidsplan. CORBETTI OÜ tar emot förfrågningar via telefon, Telegram och e-post.',
		phoneLabel: 'Telefon',
		phone: '+37256333338',
		emailLabel: 'E-post',
		email: 'corbetti.group@gmail.com',
		emailAction: 'Skriv via e-post',
		primaryAction: 'Ring',
		primaryHref: 'tel:+37256333338',
		secondaryAction: 'Skriv på Telegram',
		secondaryHref: 'https://t.me/corbetti_build',
		form: {
			title: 'Förfrågningsformulär',
			nameLabel: 'Namn',
			phoneLabel: 'Telefon',
			locationLabel: 'Objektets adress',
			workTypeLabel: 'Typ av arbete',
			messageLabel: 'Beskriv arbetet',
			submitLabel: 'Skicka till Telegram',
			submittingLabel: 'Skickar...',
			successTitle: 'Tack',
			successMessage: 'Förfrågan har skickats. Vi kontaktar er inom kort.',
			errorMessage: 'Det gick inte att skicka förfrågan. Försök igen eller skriv till oss på Telegram.',
			telegramNotice: 'Formuläret skickar förfrågan direkt till Telegram.',
		},
		cards: [
			{ label: 'Telefon', value: '+372 5633 3338' },
			{ label: 'Telegram', value: '@corbetti_build' },
			{ label: 'Språk', value: 'Eesti, русский, English, Svenska' },
			{ label: 'Kundtyper', value: 'Privatkunder, företag, bostadsrättsföreningar' },
			{ label: 'Fokus', value: 'Bygg, renovering, fasader, betong, interiörer' },
		],
		note: 'För snabbare svar kan ni skicka en kort projektbeskrivning, objektets adress och önskad tidsplan i Telegram.',
	},
	footer: {
		company: 'CORBETTI OÜ',
		rights: 'Flerspråkig partner för bygg och renovering.',
	},
};

