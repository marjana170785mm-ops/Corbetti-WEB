# WEB Corbetti site memory

Project:
- Workspace root: `C:\Users\marin\Desktop\WEB Corbetti`
- Site root: `C:\Users\marin\Desktop\WEB Corbetti\site`
- Local dev URL typically used: `http://127.0.0.1:4321/`

What was done:
- Added and then refined the `Portfolio` section presentation on the site.
- Changed portfolio cards so the visible cover uses a stronger final-result image, while opening the gallery still starts from the chronological `before -> after` order.
- Reworked the `Portfolio` section layout from large heavy blocks into a more compact card/folder-style presentation inside a shared background container.
- Adjusted portfolio cards to be visually lighter and more transparent so they fit the same visual language as `Clients` and do not overpower the background image.
- Removed the yellow tab-like accents above portfolio cards.
- Renamed portfolio case titles across all 4 active languages to a cleaner, more consistent style.

Toljan case:
- Source photos were taken from `C:\Users\marin\Desktop\WEB Corbetti\toljan`.
- A larger curated selection was prepared for the website, optimized into `site/public/images/corbetti/toljan-01.jpg` through `toljan-18.jpg`.
- Important preference: keep the Toljan case in portfolio, but do not show the word `Toljan` in the portfolio card title.
- Current portfolio title for this case should stay generic by language:
  - RU: `Этапы строительства и отделки`
  - EN: `Construction and finishing stages`
  - ET: `Ehituse ja viimistluse etapid`
  - SV: `Bygg- och finishskeden`

User preferences to remember:
- The website should stay visually cohesive: new sections and cards should match the existing style of the site and not stand out as a foreign block.
- Portfolio cards should feel closer to `Process` / `Clients`, not like oversized separate banners.
- Portfolio galleries should tell a clear story from `before` to `after`.
- Final preview image on a card can be the strongest finished image, but the gallery itself should open from the beginning of the work process.
- Avoid unnecessary descriptive text under portfolio case titles if the visuals already explain the project clearly.
- Prefer practical, clean, sales-friendly presentation without clutter.

Files that were central in these changes:
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\pages\[lang]\index.astro`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\styles\global.css`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\portfolio-images.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\translations\ru.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\translations\en.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\translations\et.ts`
- `C:\Users\marin\Desktop\WEB Corbetti\site\src\data\translations\sv.ts`
