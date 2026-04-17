import { SITE_CANONICAL_ORIGIN } from "@/constants/site";

/** Next.js metadataBase — use in layouts if needed */
export const siteMetadataBaseUrl = new URL(SITE_CANONICAL_ORIGIN);

/**
 * Full canonical URL for a path (leading slash optional).
 * Use when a page needs to reference the site URL outside of metadata.
 */
export function siteCanonicalUrl(pathname) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (path === "/") return `${SITE_CANONICAL_ORIGIN}/`;
  return new URL(path, `${SITE_CANONICAL_ORIGIN}/`).href;
}
