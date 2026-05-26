import type { Locale } from "@/lib/i18n/config";
import type { LocalizedProductData } from "@/lib/product/product-data";
import { buildLocalizedProductPath } from "@/lib/product/product-routing";
import type { Metadata } from "next";

const FALLBACK_SITE_URL = "http://localhost:3000";

export function getBaseSiteUrl(): string {
  const rawValue = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

  try {
    return new URL(rawValue).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function toAbsoluteUrl(pathname: string): string {
  return new URL(pathname, getBaseSiteUrl()).toString();
}

export function getProductCanonicalUrl(locale: Locale): string {
  return toAbsoluteUrl(buildLocalizedProductPath(locale));
}

export function getProductAlternateLanguageUrls(): Record<Locale, string> {
  return {
    "en-US": getProductCanonicalUrl("en-US"),
    "es-ES": getProductCanonicalUrl("es-ES"),
  };
}

type ProductMetadataParams = {
  locale: Locale;
  product: LocalizedProductData;
  siteName: string;
};

export function buildProductMetadata({
  locale,
  product,
  siteName,
}: ProductMetadataParams): Metadata {
  const canonicalUrl = getProductCanonicalUrl(locale);
  const firstImage = product.images[0];

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: canonicalUrl,
      languages: getProductAlternateLanguageUrls(),
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url: canonicalUrl,
      siteName,
      type: "website",
      images: firstImage
        ? [
            {
              url: firstImage.url,
              alt: firstImage.alt,
            },
          ]
        : undefined,
    },
    other: {
      "og:type": "product",
    },
  };
}
