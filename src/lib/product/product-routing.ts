import { type Locale, buildLocalizedProductUrl } from "@/lib/i18n/config";
import { getProduct } from "@/lib/product/product-data";

export const LOCALIZED_PRODUCT_SLUGS: Readonly<Record<Locale, string>> = {
  "en-US": "permanent-t-rex-fruit-roblox",
  "es-ES": "fruta-t-rex-permanente-roblox",
};

export type LocalizedProductRoute = {
  locale: Locale;
  gameSlug: string;
  productSlug: string;
  pathname: string;
};

type ProductRouteInput = {
  locale: Locale;
  gameSlug: string;
  productSlug: string;
};

export function getLocalizedProductSlug(locale: Locale): string {
  return LOCALIZED_PRODUCT_SLUGS[locale];
}

export function isValidGameSlug(gameSlug: string): boolean {
  return gameSlug === getProduct().game.slug;
}

export function isValidLocalizedProductSlug(
  locale: Locale,
  productSlug: string
): boolean {
  return productSlug === getLocalizedProductSlug(locale);
}

export function isValidProductRoute(route: ProductRouteInput): boolean {
  return (
    isValidGameSlug(route.gameSlug) &&
    isValidLocalizedProductSlug(route.locale, route.productSlug)
  );
}

export function buildLocalizedProductPath(locale: Locale): string {
  const product = getProduct();

  return buildLocalizedProductUrl(
    locale,
    product.game.slug,
    getLocalizedProductSlug(locale)
  );
}

export function getAllLocalizedProductPaths(): LocalizedProductRoute[] {
  const product = getProduct();

  return (Object.keys(LOCALIZED_PRODUCT_SLUGS) as Locale[]).map((locale) => {
    const productSlug = getLocalizedProductSlug(locale);
    const gameSlug = product.game.slug;

    return {
      locale,
      gameSlug,
      productSlug,
      pathname: buildLocalizedProductUrl(locale, gameSlug, productSlug),
    };
  });
}
