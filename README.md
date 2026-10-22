# Avery Zenz portfolio

Single-page portfolio for Avery Zenz, built with Next.js (App Router), TypeScript and Tailwind CSS. Deployed on Vercel.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run build      # production build (run this before deploying)
npm run start      # serve the production build
npm run lint       # ESLint
```

## Edit content

All copy lives in **`src/content.ts`**: hero, focus band, statement, stats, experience tabs, research cards, bio, contact links and SEO title/description. You shouldn't need to touch any component to change text.

Two formatting shortcuts work in any string:

- `**bold**` renders as semibold text (used in the hero line).
- `[anything in brackets]` renders with a dashed outline so missing info is obvious. Replace these before launch. `TODO.md` lists every one.

House style: no em dashes, and no numbers that aren't on the resume.

## Swap in photos

Drop JPGs into `public/images/` with these exact names. Each one replaces its placeholder automatically on the next build or dev reload.

| File | Where it appears | Suggested shape |
| --- | --- | --- |
| `headshot.jpg` | Hero, right panel | Portrait, about 4:5, at least 900px wide |
| `validus.jpg` | Experience tab 01 | Landscape, about 4:3, at least 1200px wide |
| `portfolio.jpg` | Experience tab 02 (a clean chart works well) | Landscape, about 4:3 |
| `sweet-couture.jpg` | Experience tab 03 | Landscape, about 4:3 |
| `dance.jpg`, `travel.jpg`, `surf.jpg` | About grid | Portrait, about 3:4 |

Images are cropped to fill their frames, so keep the subject near the center. To use a different filename, change the `file` value in `src/content.ts`. Update the matching `alt` text there too if the photo differs from its description.

## Swap in PDFs

Replace these placeholder files and keep the same names:

- `public/resume.pdf`: used by the header, hero and footer buttons
- `public/research/sector-note.pdf`
- `public/research/equity-pitch.pdf`
- `public/research/private-markets.pdf`

To rename a PDF, update its `href` in `src/content.ts`. Research notes should use only public information, never confidential Validus fund names or figures. Before uploading, check that the resume PDF has no phone number or home address, since it will be publicly downloadable.

## Project layout

```
src/
  content.ts            all copy and data
  app/
    layout.tsx          fonts, metadata, Vercel Analytics
    page.tsx            section order
    globals.css         palette tokens, focus styles, motion
    icon.tsx            favicon ("Z" on pink)
    apple-icon.tsx
    opengraph-image.tsx social share image
    sitemap.ts, robots.ts
  components/           one file per section, plus Photo, Rich, ButtonLink
  lib/                  site URL, image lookup, OG fonts
  assets/fonts/         static Bodoni Moda and Work Sans used by the OG image and favicon
public/
  images/               photos
  research/             research PDFs
  resume.pdf
design/design-reference.html   approved static mockup (not shipped)
```

## Deploy to Vercel

1. Push this repo to GitHub (a private repo is fine).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Import the `az-portfolio` repository. Vercel detects Next.js; leave the build settings at their defaults.
4. Click **Deploy**. The site is live at `https://<project-name>.vercel.app` within a minute or two.
5. Turn on analytics: in the project, open the **Analytics** tab and click **Enable**. The `<Analytics />` component is already in `layout.tsx`.
6. From now on, every push to `main` redeploys automatically, and pull requests get preview URLs.

Until a custom domain is connected, the sitemap, canonical URL and Open Graph links use the Vercel production URL automatically.

## Connect a custom domain

1. Buy the domain from any registrar (Namecheap, Cloudflare, Squarespace Domains, GoDaddy, etc.).
2. In Vercel, open the project, then **Settings → Domains**. Add the apex domain, for example `averyzenz.com`. When asked, also add `www.averyzenz.com` and set it to redirect to the apex. Or choose the reverse if you prefer `www` as primary.
3. Vercel shows the DNS records it needs. At the registrar's DNS settings, add exactly what Vercel shows. Typically:

   | Type | Name / Host | Value |
   | --- | --- | --- |
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   Vercel sometimes shows a project-specific CNAME value or a different A record. If it does, use what the Domains page shows. Delete any existing `A` or `CNAME` records for `@` or `www` that point elsewhere, such as the registrar's parking page. Leave `MX` records alone if the domain has email.
4. Wait for DNS to propagate. This usually takes a few minutes and can take up to 48 hours. Vercel's Domains page turns green and issues an HTTPS certificate automatically.
5. In **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = `https://averyzenz.com` (your real domain, no trailing slash) for Production, then redeploy. This updates the canonical URL, sitemap, robots.txt and social share links.
6. Optional: submit `https://<domain>/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

Alternative: instead of step 3, you can switch the domain's nameservers to Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) and let Vercel manage DNS. Only do this if the domain has no email or other records you'd need to recreate.

## Accessibility and motion

- Experience tabs follow the WAI-ARIA tabs pattern: arrow keys, Home and End move between tabs.
- Every interactive element has a visible focus ring, which turns pink on dark sections.
- Fade-up on scroll is disabled for visitors with "reduce motion" turned on, and content never stays hidden if JavaScript fails.
