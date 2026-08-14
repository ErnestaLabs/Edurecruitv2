import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

/**
 * Generates /robots.txt. Allows all well-behaved crawlers full access and
 * advertises the sitemap so search engines can discover every public route.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
