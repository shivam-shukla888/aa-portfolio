import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl) return [];

  const currentDate = new Date().toISOString();

  const paths = [
    "",
    "/projects",
    "/experience",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return [
    ...paths.map((path, index) => ({
      url: baseUrl + path,
      lastModified: currentDate,
      changeFrequency: index < 2 ? ("weekly" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : index < 3 ? 0.8 : 0.5,
    })),
    ...projects.map((project) => ({
      url: baseUrl + "/projects/" + project.slug,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
