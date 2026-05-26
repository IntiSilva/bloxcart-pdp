import { isLocale, type Locale } from "@/lib/i18n/config";
import { getLocalizedProduct } from "@/lib/product/product-data";
import {
  getAllLocalizedProductPaths,
  isValidProductRoute,
} from "@/lib/product/product-routing";
import { buildProductMetadata } from "@/lib/product/product-seo";
import { buildProductJsonLd } from "@/lib/product/product-schema";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

// Product price and stock can change frequently, so ISR gives us fresh enough content
// without paying SSR cost on every request or requiring a full static rebuild.
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

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <article className="space-y-8">
        <header className="space-y-3">
          <p>
            <Link
              href={`/${locale}/games/${product.game.slug}`}
              className="text-sm underline underline-offset-4"
            >
              {t("nav.backToShop")}
            </Link>
          </p>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="max-w-4xl text-base leading-7 text-muted-foreground">
            {product.description}
          </p>
        </header>

        <section aria-label="Price and stock" className="space-y-2">
          <p className="text-2xl font-bold">{product.priceCurrent}</p>
          <p className="text-sm text-muted-foreground">
            {product.stock.available
              ? t("product.stock.inStock")
              : t("product.stock.outOfStock")}
            {" - "}
            {t("product.quantity.label")}: {product.stock.quantity}
          </p>
        </section>

        <section aria-label="Product details" className="space-y-4">
          <h2 className="text-xl font-medium">{t("product.aboutThisItem")}</h2>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="text-sm text-muted-foreground">
                {t("product.details.category")}
              </dt>
              <dd className="font-medium">{product.category}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">
                {t("product.details.rarity")}
              </dt>
              <dd className="font-medium">{product.rarity}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">
                {t("product.details.game")}
              </dt>
              <dd className="font-medium">{product.game.name}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">
                {t("product.details.delivery")}
              </dt>
              <dd className="font-medium">{product.delivery}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">
                {t("product.details.condition")}
              </dt>
              <dd className="font-medium">{product.condition}</dd>
            </div>
          </dl>
        </section>

        <section aria-label="Product images" className="space-y-4">
          <h2 className="text-xl font-medium">Image references</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.images.map((image) => (
              <li
                key={image.url}
                className="rounded-lg border border-border bg-card p-3"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="aspect-square h-auto w-full rounded-md object-cover"
                />
                <p className="mt-2 break-all text-xs text-muted-foreground">
                  {image.url}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </main>
  );
}
