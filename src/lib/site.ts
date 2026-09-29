/**
 * Central site configuration resolving the canonical production URL.
 * Uses NEXT_PUBLIC_SITE_URL or falls back strictly to the primary production domain.
 * Preview deployment URLs (e.g. VERCEL_URL) are intentionally excluded.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aa-portfolio-three.vercel.app";
