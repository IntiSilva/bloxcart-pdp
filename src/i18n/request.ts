import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale =
    requestedLocale && isLocale(requestedLocale)
      ? requestedLocale
      : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
