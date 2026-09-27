import type { MetadataRoute } from "next";
import { featuredWork, legacyCaseStudy } from "../data/console";
import { captainsLog } from "../data/portfolio";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const work = [...featuredWork, legacyCaseStudy];
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/lab`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/writing`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...work.map((w) => ({
      url: `${siteUrl}/work/${w.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...captainsLog.map((post) => ({
      url: `${siteUrl}/writing/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
