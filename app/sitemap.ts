import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cognai.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://cognai.app/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: "https://cognai.app/signup",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}

