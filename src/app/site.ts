// Canonical URL, used for OG image links, the sitemap and structured data.
// Set NEXT_PUBLIC_SITE_URL in Vercel if the site moves to a custom domain.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://afeefa-portfolio-three.vercel.app");
