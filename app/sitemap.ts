import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"
import { universities } from "@/data/universities"

/**
 * Generates /sitemap.xml. The base URL is read from NEXT_PUBLIC_SITE_URL
 * (falling back to https://edurecruitment.co.uk) so that staging environments
 * emit absolute, host-correct URLs without code changes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resources`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/personal-statement-guide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  const universityRoutes: MetadataRoute.Sitemap = universities.map((uni) => ({
    url: `${siteUrl}/universities/${uni.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const legalRoutes: MetadataRoute.Sitemap = (
    ["privacy", "terms", "cookies"] as const
  ).map((slug) => ({
    url: `${siteUrl}/legal/${slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }))

  return [...staticRoutes, ...universityRoutes, ...legalRoutes]
}
