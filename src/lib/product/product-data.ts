import type { Locale } from "@/lib/i18n/config";
import rawProductData from "../../../data.json";

export type ProductLocaleFields = {
  title: string;
  description: string;
  priceOriginal: string;
  priceCurrent: string;
  priceSavings: string;
  ctaLabel: string;
  trustBadges: string[];
};

export type ProductGame = {
  slug: string;
  name: string;
};

export type ProductStock = {
  available: boolean;
  quantity: number;
};

export type ProductImage = {
  url: string;
  alt: string;
};

export type ProductData = {
  slug: string;
  game: ProductGame;
  category: string;
  rarity: string;
  delivery: string;
  condition: string;
  tags: string[];
  locales: Record<Locale, ProductLocaleFields>;
  stock: ProductStock;
  images: ProductImage[];
};

export type LocalizedProductData = Omit<ProductData, "locales"> &
  ProductLocaleFields & {
    locale: Locale;
  };

const productData: ProductData = rawProductData as ProductData;

export function getProduct(): ProductData {
  return productData;
}

export function getLocalizedProduct(locale: Locale): LocalizedProductData {
  const { locales, ...baseProduct } = productData;
  const localizedFields = locales[locale];

  return {
    ...baseProduct,
    ...localizedFields,
    locale,
  };
}
