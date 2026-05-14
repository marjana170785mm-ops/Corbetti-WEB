# WEB Corbetti Long-Term Memory

Updated: 2026-05-07
Workspace: `C:\Users\marin\Desktop\WEB Corbetti`

## Project Map

- Main site lives in `C:\Users\marin\Desktop\WEB Corbetti\site`.
- Site framework: Astro 6 with `@astrojs/node` standalone adapter.
- Production domain in config: `https://corbetti.ee`.
- Local dev URL normally used: `http://127.0.0.1:4321/`.
- Build command from `site`: `npm run build`.
- Start command from `site`: `npm run start`.
- Node requirement: `>=22.12.0`.
- Production app is a Node server, not a plain static site.

## Current Production/Deploy Shape

- Git branch: `main`, currently synced with `origin/main` when checked on 2026-05-07.
- GitHub Actions workflow: `.github/workflows/deploy.yml`.
- Workflow triggers on pushes to `main` that touch `site/**` or the deploy workflow, and also supports `workflow_dispatch`.
- Workflow installs with `npm ci`, builds the Astro app, packs `dist`, `deploy`, `package.json`, and `package-lock.json`, uploads the archive to the VPS, then restarts PM2.
- VPS app directory: `/var/www/corbetti/site`.
- PM2 app name: `corbetti-site`.
- PM2 config: `site/deploy/ecosystem.config.cjs`.
- PM2 runs `dist/server/entry.mjs` with `HOST=127.0.0.1` and `PORT=4321`.
- Nginx config: `site/deploy/corbetti.ee.nginx.conf`.
- Nginx proxies `corbetti.ee` and `www.corbetti.ee` to `http://127.0.0.1:4321`.
- Required GitHub secrets for deploy: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`.
- Required server `.env` values: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.
- Do not store real token values in repo memory or skill files.

## What We Built

- Multi-language Corbetti construction/renovation website with language routes.
- Active translation files: `ru.ts`, `en.ts`, `et.ts`, `sv.ts`; `fi.ts` exists but is older/smaller.
- Important content rule: when changing visible website text or portfolio titles, update all 4 active languages (RU/EN/ET/SV) in the same pass unless the user explicitly asks for one language only.
- Core page: `site/src/pages/[lang]/index.astro`.
- Shared styles: `site/src/styles/global.css`.
- Shared content/data types: `site/src/data/types.ts`.
- Portfolio image data: `site/src/data/portfolio-images.ts`.
- Telegram inquiry API: `site/src/pages/api/telegram-inquiry.ts`.
- Local review API/storage: `site/src/pages/api/reviews.ts`, `site/src/lib/reviews.ts`, `site/storage/reviews.json`.

## Visual/UX Preferences

- Keep the website cohesive: new sections should match the existing visual language instead of feeling like separate blocks.
- Portfolio cards should be compact, practical, clean, and sales-friendly.
- Portfolio cards should feel closer to the `Process` and `Clients` sections, not like oversized banners.
- Avoid unnecessary descriptive text when project images already explain the work.
- Portfolio card covers may use the strongest final-result image, but galleries should open in a clear before-to-after/story order.
- Preserve a polished construction-company feel: useful, visual, trustworthy, not cluttered.

## Portfolio Work

- Portfolio was refined from heavier blocks into lighter folder/card-style presentation.
- Yellow tab-like portfolio accents were removed.
- Portfolio case titles were cleaned across RU/EN/ET/SV.
- The `toljan` case must stay in portfolio, but the visible title should not use the word `Toljan`.
- Current generic Toljan-style titles:
  - RU: `Этапы строительства и отделки`
  - EN: `Construction and finishing stages`
  - ET: `Ehituse ja viimistluse etapid`
  - SV: `Bygg- och finishskeden`
- Toljan source photos are in `C:\Users\marin\Desktop\WEB Corbetti\toljan`.
- Curated/optimized Toljan website images live as `site/public/images/corbetti/toljan-01.jpg` through `toljan-34.jpg`.
- Additional GetaPro-derived portfolio images were added under `site/public/images/corbetti/` with groups such as concrete, demolition, facade, floor repair, heat box, premises repair, regips, scaffold, and window install.
- Source/scrape files include `getapro-30506.html`, `getapro-30506-portfolio.json`, and `getapro-30506-portfolio-2026-05-06.json`.
- Curation artifacts include `exports/getapro-curation-manifest.json` and candidate/source folders under `exports/`.

## Reviews and Forms

- A reviews section was added under `Clients`.
- Reviews show `5.0 / 5` and a clickable `(2)` count.
- Reviews are hidden by default and expand after clicking `(2)`.
- Review cards keep the original public review text language.
- The Andrei review intentionally preserves the original mixed Estonian/Russian text and original spelling/punctuation.
- The review form opens locally on the site instead of sending the user away.
- Review form uses star selection and shows a separate thank-you state after successful submission.
- `telegram-inquiry.ts` supports review-type messages as well as inquiries.
- Telegram inquiry success title was localized in RU/EN/ET/SV in the latest commit.

## Contact/CTA Notes

- Floating quick contact buttons `Позвонить` and `Telegram` were restored after a temporary removal.
- Dark right-side info cards were removed from the contact section.
- The contact experience should stay direct and low-friction.

## Important Files

- `C:\Users\marin\Desktop\WEB Corbetti\site\src\pages\[lang]\index.astro`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\styles\global.css`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\portfolio-images.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\types.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\translations\ru.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\translations\en.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\translations\et.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\translations\sv.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\pages\api\telegram-inquiry.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\lib\reviews.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\.github\workflows\deploy.yml`
- `C:\Users\marin\Desktop\WEB Corbetti\site\deploy\ecosystem.config.cjs`
- `C:\Users\marin\Desktop\WEB Corbetti\site\deploy\corbetti.ee.nginx.conf`

## Recent Git History Notes

- `209cf58 Localize inquiry success title`: added localized success title fields and used them in the inquiry form success state.
- `73fcb69 Fix Telegram inquiries and test review cleanup`: hardened Telegram inquiry/review handling and review cleanup behavior.
- `8778e48 Add production deploy workflow`: added GitHub Actions deploy to VPS.
- `9132a39 Update Corbetti site content and branding`: major site content, branding, image, portfolio, reviews, and Telegram work.
- `cffc3c1 Prepare VPS deployment and update FAQ layout`: added PM2/Nginx/VPS deploy files and adjusted FAQ layout.

## Saved Codex Skill

- A reusable Codex skill for this deployment pattern was saved as `C:\Users\marin\.codex\skills\deploy-zone-vps`.
- Use it for future requests like: "deploy Corbetti to Zone VPS", "update the Zone VPS deploy", "fix PM2/Nginx deploy", or "set up GitHub Actions deploy to the VPS".
