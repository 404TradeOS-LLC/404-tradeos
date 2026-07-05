import type { MetadataRoute } from "next";

const baseUrl = "https://www.404tradeos.com";

const routes = [
  "",
  "/pricing",
  "/work",
  "/services",
  "/services/website-design",
  "/services/local-seo",
  "/services/lead-generation",
  "/services/review-management",
  "/services/google-ads",
  "/services/maintenance",
  "/about",
  "/resources",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" || route === "/pricing" ? 0.9 : 0.7,
  }));
}
