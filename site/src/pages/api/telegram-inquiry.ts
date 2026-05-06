import nodemailer from 'nodemailer';

export const prerender = false;

const escapeHtml = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');

const decodeHtml = (value: string) =>
	value
		.replaceAll('&quot;', '"')
		.replaceAll('&gt;', '>')
		.replaceAll('&lt;', '<')
		.replaceAll('&amp;', '&');

type InquiryPayload = {
	kind?: string;
	name?: string;
	phone?: string;
	location?: string;
	workType?: string;
	message?: string;
	pageUrl?: string;
	locale?: string;
};

type NormalizedPayload = Required<InquiryPayload>;

const buildHtmlMessage = ({ name, phone, location, workType, message, pageUrl, locale }: NormalizedPayload) => {
	const isReview = workType === 'Website review';
	const lines = [
		isReview ? '<b>New review from CORBETTI OU website</b>' : '<b>New inquiry from CORBETTI OU website</b>',
		'',
		`<b>Name:</b> ${escapeHtml(name)}`,
		`<b>Phone:</b> ${escapeHtml(phone)}`,
		location ? `<b>Object address:</b> ${escapeHtml(location)}` : '',
		workType && !isReview ? `<b>Work type:</b> ${escapeHtml(workType)}` : '',
		`<b>Description:</b> ${escapeHtml(message)}`,
		locale ? `<b>Page language:</b> ${escapeHtml(locale)}` : '',
		pageUrl ? `<b>Page:</b> ${escapeHtml(pageUrl)}` : '',
	].filter(Boolean);

	return lines.join('\n');
};

const buildTextMessage = (payload: NormalizedPayload) =>
	decodeHtml(buildHtmlMessage(payload))
		.replaceAll('<b>', '')
		.replaceAll('</b>', '');

const buildEmailSubject = ({ name, phone, workType }: NormalizedPayload) =>
	workType === 'Website review'
		? `New review from Corbetti website: ${name}`
		: `New inquiry from Corbetti website: ${name} ${phone}`;

const sendTelegramInquiry = async (payload: NormalizedPayload) => {
	const botToken = import.meta.env.TELEGRAM_BOT_TOKEN;
	const chatId = import.meta.env.TELEGRAM_CHAT_ID;

	if (!botToken || !chatId) {
		throw new Error('Telegram environment variables are not configured.');
	}

	const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			chat_id: chatId,
			text: buildHtmlMessage(payload),
			parse_mode: 'HTML',
			disable_web_page_preview: true,
		}),
	});

	if (!telegramResponse.ok) {
		throw new Error(await telegramResponse.text());
	}
};

const sendEmailInquiry = async (payload: NormalizedPayload) => {
	const smtpHost = import.meta.env.SMTP_HOST;
	const smtpPort = Number(import.meta.env.SMTP_PORT ?? 587);
	const smtpUser = import.meta.env.SMTP_USER;
	const smtpPass = import.meta.env.SMTP_PASS;
	const smtpFrom = import.meta.env.SMTP_FROM ?? smtpUser;
	const inquiryEmailTo = import.meta.env.INQUIRY_EMAIL_TO ?? 'corbetti.group@gmail.com';

	if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !inquiryEmailTo) {
		return { skipped: true };
	}

	const transporter = nodemailer.createTransport({
		host: smtpHost,
		port: smtpPort,
		secure: smtpPort === 465,
		auth: {
			user: smtpUser,
			pass: smtpPass,
		},
	});

	const htmlMessage = buildHtmlMessage(payload);

	await transporter.sendMail({
		from: smtpFrom,
		to: inquiryEmailTo,
		subject: buildEmailSubject(payload),
		text: buildTextMessage(payload),
		html: htmlMessage.replaceAll('\n', '<br />'),
	});

	return { skipped: false };
};

export const POST = async ({ request }: { request: Request }) => {
	const payload = (await request.json()) as InquiryPayload;
	const normalizedPayload = {
		kind: String(payload.kind ?? '').trim(),
		name: String(payload.name ?? '').trim(),
		phone: String(payload.phone ?? '').trim(),
		location: String(payload.location ?? '').trim(),
		workType: String(payload.workType ?? '').trim(),
		message: String(payload.message ?? '').trim(),
		pageUrl: String(payload.pageUrl ?? '').trim(),
		locale: String(payload.locale ?? '').trim(),
	};

	const isReview = normalizedPayload.kind === 'review';

	if (!normalizedPayload.name || !normalizedPayload.message || (!isReview && !normalizedPayload.phone)) {
		return new Response(JSON.stringify({ ok: false, error: 'Required fields are missing.' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	if (isReview) {
		normalizedPayload.workType = 'Website review';
		normalizedPayload.location = '';
		normalizedPayload.phone = normalizedPayload.phone || 'Not provided';
	}

	try {
		await sendTelegramInquiry(normalizedPayload);
		const emailResult = await sendEmailInquiry(normalizedPayload);

		return new Response(JSON.stringify({ ok: true, emailSkipped: emailResult.skipped }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		return new Response(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : 'Unknown error' }), {
			status: 502,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
