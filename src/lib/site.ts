/**
 * Canonical site URL, used for metadata, the sitemap and robots.txt.
 * Set NEXT_PUBLIC_SITE_URL once a custom domain is connected. Until then,
 * Vercel's production URL is used automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
