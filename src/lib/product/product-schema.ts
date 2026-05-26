import type { Locale } from "@/lib/i18n/config";
import type { LocalizedProductData } from "@/lib/product/product-data";
import { getProductCanonicalUrl } from "@/lib/product/product-seo";

type ProductAvailability =
  | "https://schema.org/InStock"
  | "https://schema.org/OutOfStock";

export type ProductJsonLd = {
  "@context": "https://schema.org";
  "@type": "Product";
  name: string;
  description: string;
  image: string[];
  brand: {
    "@type": "Brand";
    name: string;
  };
  category: string;
  offers: {
    "@type": "Offer";
    price: string;
    priceCurrency: "USD" | "EUR";
    availability: ProductAvailability;
    url: string;
  };
  aggregateRating: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
  };
};

export function parseFormattedPriceToNumber(price: string): number | null {
  const numericPart = price.replace(/[^\d.,-]/g, "");

  if (numericPart.length === 0) {
    return null;
  }

  const lastCommaIndex = numericPart.lastIndexOf(",");
  const lastDotIndex = numericPart.lastIndexOf(".");
  const decimalSeparator = lastCommaIndex > lastDotIndex ? "," : ".";

  let normalizedValue = numericPart;
  if (decimalSeparator === ",") {
    normalizedValue = normalizedValue.replace(/\./g, "").replace(",", ".");
  } else {
    normalizedValue = normalizedValue.replace(/,/g, "");
  }

  const parsedValue = Number.parseFloat(normalizedValue);
  return Number.isFinite(parsedValue) ? parsedValue : null;
}

function getPriceCurrency(locale: Locale, price: string): "USD" | "EUR" {
  if (price.includes("$")) {
    return "USD";
  }

  if (price.includes("EUR")) {
    return "EUR";
  }

  return locale === "es-ES" ? "EUR" : "USD";
}

export function buildProductJsonLd(
  locale: Locale,
  product: LocalizedProductData
): ProductJsonLd {
  const parsedPrice = parseFormattedPriceToNumber(product.priceCurrent);
  const price = (parsedPrice ?? 21.5).toFixed(2);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images.map((image) => image.url),
    brand: {
      "@type": "Brand",
      name: product.game.name,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: getPriceCurrency(locale, product.priceCurrent),
      availability: product.stock.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: getProductCanonicalUrl(locale),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 128,
    },
  };
}
