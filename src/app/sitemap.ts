import {
  getAllLocalizedProductPaths,
  type LocalizedProductRoute,
} from "@/lib/product/product-routing";
import {
  getProductAlternateLanguageUrls,
  toAbsoluteUrl,
} from "@/lib/product/product-seo";
import type { MetadataRoute } from "next";

function buildSitemapEntry(route: LocalizedProductRoute): MetadataRoute.Sitemap[number] {
  return {
    url: toAbsoluteUrl(route.pathname),
    lastModified: new Date(),
    alternates: {
      languages: getProductAlternateLanguageUrls(),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllLocalizedProductPaths().map(buildSitemapEntry);
}
