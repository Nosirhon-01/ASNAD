# ASNAD Uzbekistan — website

A one-page website for ASNAD Uzbekistan (bamboo panels, decorative wall panels, louver panels, hidden doors, construction adhesive).
Uzbek (default) and Russian, with every inquiry button opening WhatsApp with a prefilled message.

**Stack:** Vite · React 18 (JavaScript/JSX) · Tailwind CSS 3 · Framer Motion · Lucide icons.
No backend, database, API keys or environment variables.

---

## 1. Install

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

## 3. Production build

```bash
npm run build
```

The finished site is written to `dist/`. To preview that build locally:

```bash
npm run preview
```

## 4. Deploy to Vercel (free plan)

**Option A — from GitHub**

1. Push this folder to a GitHub repository.
2. In [vercel.com](https://vercel.com) choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (`vercel.json` is included). Build command `npm run build`, output folder `dist`.
4. Click **Deploy**.

**Option B — from your computer**

```bash
npx vercel
```

The site is a single page with section anchors (`#products`, `#contact`, …), so no extra routing rules are needed.

---

## Where things live

```
src/
  data/
    products.js       ← product categories, names, descriptions, photos
    translations.js   ← all site text in Uzbek (uz) and Russian (ru)
    contact.js        ← phone numbers, WhatsApp, Instagram, Telegram, address, map
    media.js          ← hero, showcase, gallery and CTA photos
  components/         ← one file per section (Navbar, Hero, ProductCatalog, …)
  context/LanguageContext.jsx  ← current language, saved in localStorage
  utils/whatsapp.js   ← builds wa.me links with URL-encoded messages
  hooks/              ← modal behaviour (Escape, focus, scroll lock), headline fitting
public/
  favicon.svg
```

## 5. Replace the product photographs

The current photos are **demonstration interiors from Unsplash** (free Unsplash License). They are not ASNAD products or ASNAD customer projects — replace them with real ASNAD photos when available.

1. Put your photos in `public/products/` (for example `public/products/bamboo.jpg`).
   Recommended: JPG or WebP, about 1600 px wide, under 400 KB.
2. Open `src/data/products.js` and change the `image` line of the product:

   ```js
   image: '/products/bamboo.jpg',
   ```

3. Update `imageAlt` (uz and ru) so it describes the new photo.

Showcase, gallery, hero and CTA photos work the same way in `src/data/media.js`
(put files in `public/gallery/` and use `src: '/gallery/your-photo.jpg'`).
In the gallery, `shape` can be `'wide'`, `'tall'` or `'square'`.

If a photo ever fails to load, the site shows a neutral placeholder instead of a broken image.

## 6. Update product information

Each product in `src/data/products.js` has:

| Field          | Meaning                                                    |
| -------------- | ---------------------------------------------------------- |
| `id`           | unique, no spaces                                          |
| `category`     | one of the `id`s in `categories` (used by the filters)     |
| `name`         | `{ uz, ru }` — also used in the WhatsApp inquiry message   |
| `short`        | `{ uz, ru }` — one sentence on the card                    |
| `description`  | `{ uz, ru }` — full text in the details window             |
| `applications` | `{ uz: [...], ru: [...] }` — where it is used              |

To add a product, copy an existing block and change the values. Cards, filters and counts update automatically.
Prices are intentionally not shown; customers are asked to confirm price and availability.

## 7. Change contact details

Edit `src/data/contact.js`:

- `whatsappNumber` — digits only (e.g. `998337778800`)
- `phones` — what is displayed and the `tel:` link
- `instagram`, `telegram`, `address`
- `mapQuery` — the text searched on Google Maps (the embedded map needs no API key)

## 8. Update translations

All interface text is in `src/data/translations.js`, under `uz` and `ru`.
Keep the same keys in both languages. A few entries are small functions, for example:

```js
product: (name) => `Assalomu alaykum! ASNAD saytidan ${name} haqida ma’lumot olmoqchiman.`,
```

The WhatsApp messages are under `messages`. Language choice is remembered in the browser (`localStorage`).

## Logo

No logo file was available, so the site uses a typographic “ASNAD / UZBEKISTAN” wordmark
(`src/components/BrandMark.jsx`) and a simple “A” favicon (`public/favicon.svg`).
To use the official logo, put it in `public/` (e.g. `public/logo.svg`) and replace the contents of `BrandMark.jsx` with an `<img src="/logo.svg" alt="ASNAD" />`.
Replace `public/favicon.svg` the same way.

## Notes

- Animations respect the visitor's “reduce motion” system setting.
- Fonts (Inter Tight, Cormorant Garamond) load from Google Fonts.
- Images load from `images.unsplash.com` until you replace them with local files.
