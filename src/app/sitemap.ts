import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/menu", "/catering", "/about", "/contact", "/privacy"].map(
    (path) => ({
      url: `${site.url}${path}`,
      changeFrequency: path === "/menu" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/menu" ? 0.9 : 0.6,
    }),
  );
}
