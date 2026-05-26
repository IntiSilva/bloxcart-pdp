import { toAbsoluteUrl } from "@/lib/product/product-seo";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: toAbsoluteUrl("/sitemap.xml"),
  };
}
