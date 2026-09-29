/**
 * Central site configuration resolving base URL from environment or fallback.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://syyeda-aamna.dev");
