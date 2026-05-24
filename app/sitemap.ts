import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.simonegarofalo.xyz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}