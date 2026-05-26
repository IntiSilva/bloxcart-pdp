export const SUPPORTED_LOCALES = ["en-US", "es-ES"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en-US";

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.some((locale) => locale === value);
}

export function buildLocalizedPath(locale: Locale, pathname: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `/${locale}${normalizedPath}`;
}

export function buildLocalizedProductUrl(
  locale: Locale,
  gameSlug: string,
  productSlug: string
): string {
  return buildLocalizedPath(locale, `/games/${gameSlug}/${productSlug}`);
}
