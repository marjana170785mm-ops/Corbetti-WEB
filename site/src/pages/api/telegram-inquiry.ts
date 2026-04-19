export const prerender = false;

const escapeHtml = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');

type InquiryPayload = {
	name?: string;
	phone?: string;
	location?: string;
	workType?: string;
	message?: string;
	pageUrl?: string;
	locale?: string;
};

const buildMessage = ({ name, phone, location, workType, message, pageUrl, locale }: Required<InquiryPayload>) => {
	const lines = [
		'<b>Новая заявка с сайта CORBETTI OÜ</b>',
		'',
		`<b>Имя:</b> ${escapeHtml(name)}`,
		`<b>Телефон:</b> ${escapeHtml(phone)}`,
		location ? `<b>Адрес объекта:</b> ${escapeHtml(location)}` : '',
		workType ? `<b>Тип работ:</b> ${escapeHtml(workType)}` : '',
		`<b>Описание:</b> ${escapeHtml(message)}`,
		locale ? `<b>Язык страницы:</b> ${escapeHtml(locale)}` : '',
		pageUrl ? `<b>Страница:</b> ${escapeHtml(pageUrl)}` : '',
	].filter(Boolean);

	return lines.join('\n');
};

export const POST = async ({ request }: { request: Request }) => {
	const botToken = import.meta.env.TELEGRAM_BOT_TOKEN;
	const chatId = import.meta.env.TELEGRAM_CHAT_ID;

	if (!botToken || !chatId) {
		return new Response(JSON.stringify({ ok: false, error: 'Telegram environment variables are not configured.' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const payload = (await request.json()) as InquiryPayload;
	const normalizedPayload = {
		name: String(payload.name ?? '').trim(),
		phone: String(payload.phone ?? '').trim(),
		location: String(payload.location ?? '').trim(),
		workType: String(payload.workType ?? '').trim(),
		message: String(payload.message ?? '').trim(),
		pageUrl: String(payload.pageUrl ?? '').trim(),
		locale: String(payload.locale ?? '').trim(),
	};

	if (!normalizedPayload.name || !normalizedPayload.phone || !normalizedPayload.message) {
		return new Response(JSON.stringify({ ok: false, error: 'Required fields are missing.' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			chat_id: chatId,
			text: buildMessage(normalizedPayload),
			parse_mode: 'HTML',
			disable_web_page_preview: true,
		}),
	});

	if (!telegramResponse.ok) {
		return new Response(JSON.stringify({ ok: false, error: await telegramResponse.text() }), {
			status: 502,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};
