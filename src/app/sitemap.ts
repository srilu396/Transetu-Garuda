import { MetadataRoute } from "next";
import { solutions } from "@/sections/gps/data/gpsData";
import { industries } from "@/sections/industries/data/industriesData";
import { getSiteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/fastag/customer", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/fastag/partner", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const solutionRoutes = Object.keys(solutions).map((slug) => ({
    path: `/solutions/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryRoutes = industries.map((i) => ({
    path: `/industries/${i.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const allRoutes = [...staticRoutes, ...solutionRoutes, ...industryRoutes];

  return allRoutes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}