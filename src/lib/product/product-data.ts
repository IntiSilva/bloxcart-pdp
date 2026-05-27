import type { Locale } from "@/lib/i18n/config";
import rawProductData from "../../../data.json";

export const PRODUCT_CATEGORIES = ["Permanent Fruit"] as const;
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const PRODUCT_RARITIES = ["Mythical"] as const;
export type ProductRarity = (typeof PRODUCT_RARITIES)[number];

export const PRODUCT_CONDITIONS = ["Brand New"] as const;
export type ProductCondition = (typeof PRODUCT_CONDITIONS)[number];

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
  category: ProductCategory;
  rarity: ProductRarity;
  delivery: string;
  condition: ProductCondition;
  tags: string[];
  locales: Record<Locale, ProductLocaleFields>;
  stock: ProductStock;
  images: ProductImage[];
};

export type LocalizedProductData = Omit<ProductData, "locales"> &
  ProductLocaleFields & {
    locale: Locale;
  };

function isOneOf<T extends string>(
  allowedValues: readonly T[],
  value: string
): value is T {
  return allowedValues.some((allowedValue) => allowedValue === value);
}

function parseProductCategory(value: string): ProductCategory {
  if (isOneOf(PRODUCT_CATEGORIES, value)) {
    return value;
  }

  throw new Error(`Unsupported product category in data.json: ${value}`);
}

function parseProductRarity(value: string): ProductRarity {
  if (isOneOf(PRODUCT_RARITIES, value)) {
    return value;
  }

  throw new Error(`Unsupported product rarity in data.json: ${value}`);
}

function parseProductCondition(value: string): ProductCondition {
  if (isOneOf(PRODUCT_CONDITIONS, value)) {
    return value;
  }

  throw new Error(`Unsupported product condition in data.json: ${value}`);
}

const productData: ProductData = {
  ...rawProductData,
  category: parseProductCategory(rawProductData.category),
  rarity: parseProductRarity(rawProductData.rarity),
  condition: parseProductCondition(rawProductData.condition),
};

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
