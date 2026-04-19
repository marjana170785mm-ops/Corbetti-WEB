# Deploy To Marina VPS

This project runs as an Astro Node app, not as plain static files.

## Server assumptions

- Debian/Ubuntu VPS
- Nginx reverse proxy
- Node.js 22+ installed
- PM2 used to keep the app running

## App path

- `/var/www/corbetti/site`

## Environment file

Create:

```bash
/var/www/corbetti/site/.env
```

With:

```env
TELEGRAM_BOT_TOKEN=your_real_bot_token
TELEGRAM_CHAT_ID=your_real_chat_id
```

## Start app

```bash
cd /var/www/corbetti/site
npm ci
npm run build
pm2 start deploy/ecosystem.config.cjs
pm2 save
```

## Nginx

Copy:

```bash
deploy/corbetti.ee.nginx.conf
```

To:

```bash
/etc/nginx/sites-available/corbetti.ee
```

Enable:

```bash
ln -s /etc/nginx/sites-available/corbetti.ee /etc/nginx/sites-enabled/corbetti.ee
nginx -t
systemctl reload nginx
```
