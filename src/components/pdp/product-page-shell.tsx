import { ProductDescription } from "@/components/pdp/product-description";
import { ProductDetails } from "@/components/pdp/product-details";
import { ProductFooter } from "@/components/pdp/product-footer";
import { ProductGallery } from "@/components/pdp/product-gallery";
import {
  ProductIdentity,
  ProductPurchaseActions,
} from "@/components/pdp/product-purchase-panel";
import { ProductTags } from "@/components/pdp/product-tags";
import { SiteHeader } from "@/components/pdp/site-header";
import { TrustBadges } from "@/components/pdp/trust-badges";
import { mapImagesToDisplayAsset } from "@/lib/product/product-images";
import type { ProductPageViewModel } from "@/components/pdp/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductPageShellProps = ProductPageViewModel;

export function ProductPageShell({ locale, product, labels }: ProductPageShellProps) {
  const displayImages = mapImagesToDisplayAsset(product.images);

  return (
    <article className="min-h-screen bg-[radial-gradient(120%_70%_at_0%_0%,rgba(102,90,184,0.25)_0%,transparent_58%),linear-gradient(to_bottom,var(--blox-bg-top)_0%,var(--blox-bg-bottom)_100%)]">
      <SiteHeader locale={locale} labels={labels.nav} />

      <main className="mx-auto w-full max-w-pdp-rail px-4 py-7 md:px-6 md:py-9 2xl:max-w-pdp-rail-wide">
        <div className="mx-auto w-full max-w-pdp-hero 2xl:max-w-pdp-hero-wide">
          <div className="mb-3 flex items-center md:hidden">
            <Link
              href={`/${locale}/games/${product.game.slug}`}
              aria-label={labels.nav.backToShop}
              className="grid size-8 shrink-0 place-items-center rounded-md bg-blox-control text-foreground transition-colors hover:bg-blox-control-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </Link>
            <div className="inline-flex min-w-0 flex-1 items-center gap-2 rounded-xl px-3 py-2">
              <Image
                src="/games/bf.avif"
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="size-8 rounded-md object-cover"
              />
              <span className="truncate text-sm font-semibold text-foreground">
                {product.game.name}
              </span>
            </div>
          </div>

          <p className="mb-3 hidden md:mb-4 md:block">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="rounded-lg pl-0 pr-2 text-muted-foreground hover:text-foreground 2xl:text-sm 2xl:gap-2"
            >
              <Link href={`/${locale}/games/${product.game.slug}`}>
                <span className="grid size-7 place-items-center rounded-md bg-blox-control 2xl:size-8">
                  <ChevronLeft className="size-4 2xl:size-5" aria-hidden="true" />
                </span>
                {labels.nav.backToShop}
              </Link>
            </Button>
          </p>

          <section className="grid items-start gap-7 md:max-xl:grid md:max-xl:grid-cols-[minmax(320px,1fr)_minmax(280px,360px)] md:max-xl:gap-x-8 md:max-xl:gap-y-6 md:max-xl:items-start xl:grid-cols-[minmax(340px,360px)_minmax(340px,1fr)] xl:gap-x-8 xl:gap-y-7 2xl:grid-cols-[minmax(540px,1fr)_minmax(420px,500px)] 2xl:gap-x-12">
            <div className="contents md:max-xl:col-start-2 md:max-xl:row-start-1 md:max-xl:w-full md:max-xl:self-stretch md:max-xl:flex md:max-xl:flex-col md:max-xl:justify-between md:space-y-0 md:max-xl:gap-6 xl:col-start-2 xl:row-start-1 xl:self-stretch xl:flex xl:flex-col xl:justify-between xl:gap-8">
              <div className="contents md:max-xl:block md:max-xl:space-y-4 xl:block xl:space-y-4 2xl:space-y-5">
                <div className="order-1">
                  <ProductIdentity product={product} />
                </div>
                <div className="order-3">
                  <ProductPurchaseActions product={product} labels={labels} />
                </div>
              </div>
              <div className="order-4">
                <TrustBadges
                  badges={product.trustBadges}
                  sectionLabel={labels.product.sections.trust}
                />
              </div>
            </div>

            <ProductGallery
              className="order-2 mx-auto mt-0.5 w-full max-w-md md:mx-0 md:max-xl:col-start-1 md:max-xl:row-start-1 md:max-xl:max-w-lg xl:max-w-sm xl:order-0 xl:col-start-1 xl:row-start-1 xl:mt-0 2xl:max-w-lg"
              images={displayImages}
              secretLabel={labels.product.gallery.secret}
              sectionLabel={labels.product.sections.imageGallery}
              thumbnailsLabel={labels.product.gallery.thumbnails}
            />

            <div className="order-5 md:max-xl:col-span-2 md:max-xl:row-start-2 xl:order-0 xl:col-start-2 xl:row-start-2">
              <ProductDetails product={product} labels={labels} />
            </div>

            <div className="order-6 space-y-8 md:max-xl:col-span-2 md:max-xl:row-start-3 xl:order-0 xl:col-start-1 xl:row-start-2">
              <ProductDescription product={product} labels={labels} />
              <ProductTags product={product} labels={labels} />
            </div>
          </section>
        </div>
      </main>

      <ProductFooter locale={locale} labels={labels} />
    </article>
  );
}
