import { ProductPageShell } from "@/components/pdp/product-page-shell";
import type { ProductPageLabels } from "@/components/pdp/types";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getLocalizedProduct } from "@/lib/product/product-data";
import {
  getAllLocalizedProductPaths,
  isValidProductRoute,
} from "@/lib/product/product-routing";
import { buildProductMetadata } from "@/lib/product/product-seo";
import { buildProductJsonLd } from "@/lib/product/product-schema";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type ProductPageParams = {
  locale: string;
  gameSlug: string;
  productSlug: string;
};

type ProductPageProps = {
  params: Promise<ProductPageParams>;
};

// Assignment requires ISR, and PDPs are SEO-sensitive and mostly cacheable; 60s keeps
// static performance while limiting stale price/stock. In production, prefer webhook-
// driven revalidation (e.g. Shopify + revalidateTag/revalidatePath) for exact updates.
export const revalidate = 60;

async function getValidatedRouteParams(
  paramsPromise: Promise<ProductPageParams>
): Promise<{
  locale: Locale;
  gameSlug: string;
  productSlug: string;
}> {
  const { locale: localeParam, gameSlug, productSlug } = await paramsPromise;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;

  if (!isValidProductRoute({ locale, gameSlug, productSlug })) {
    notFound();
  }

  return { locale, gameSlug, productSlug };
}

export function generateStaticParams(): Array<ProductPageParams> {
  return getAllLocalizedProductPaths().map(({ locale, gameSlug, productSlug }) => ({
    locale,
    gameSlug,
    productSlug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale } = await getValidatedRouteParams(params);
  const product = getLocalizedProduct(locale);
  const t = await getTranslations({ locale });

  return buildProductMetadata({
    locale,
    product,
    siteName: t("seo.siteName"),
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale } = await getValidatedRouteParams(params);
  const product = getLocalizedProduct(locale);
  const t = await getTranslations({ locale });
  const productSchema = buildProductJsonLd(locale, product);
  const labels: ProductPageLabels = {
    nav: {
      backToShop: t("nav.backToShop"),
      brand: t("site.brand"),
      orderStatus: t("site.orderStatus"),
      support247: t("site.support247"),
      currency: t("site.currency"),
      signIn: t("site.signIn"),
      menu: t("site.menu"),
    },
    product: {
      aboutThisItem: t("product.aboutThisItem"),
      stockIn: t("product.stock.inStock"),
      stockOut: t("product.stock.outOfStock"),
      quantity: t("product.quantity.label"),
      details: {
        category: t("product.details.category"),
        rarity: t("product.details.rarity"),
        game: t("product.details.game"),
        delivery: t("product.details.delivery"),
        condition: t("product.details.condition"),
      },
      sections: {
        trust: t("product.sections.trust"),
        details: t("product.sections.details"),
        tags: t("product.sections.tags"),
        imageGallery: t("product.sections.imageGallery"),
      },
      gallery: {
        secret: t("product.gallery.secret"),
        thumbnails: t("product.gallery.thumbnails"),
      },
    },
    footer: {
      marketplaceNote: t("footer.marketplaceNote"),
      support: t("footer.support"),
      resources: t("footer.resources"),
      legal: t("footer.legal"),
      blogs: t("footer.blogs"),
      affiliates: t("footer.affiliates"),
      claimOrder: t("footer.claimOrder"),
      tutorial: t("footer.tutorial"),
      terms: t("footer.terms"),
      needHelp: t("footer.needHelp"),
      helpDescription: t("footer.helpDescription"),
      chatCta: t("footer.chatCta"),
      copyright: t("footer.copyright"),
    },
  };

  return (
    <>
      <ProductPageShell locale={locale} product={product} labels={labels} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
