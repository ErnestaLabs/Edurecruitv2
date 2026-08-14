/**
 * Site-wide configuration. Centralises the canonical origin used by
 * sitemap.ts, robots.ts, layout metadata, and structured data so that
 * changing hosts only requires updating one constant.
 */
const DEFAULT_SITE_URL = "https://edurecruitment.co.uk"

function resolveSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL
  return raw.replace(/\/+$/, "")
}

export const siteUrl: string = resolveSiteUrl()
