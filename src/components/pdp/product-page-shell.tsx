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
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type ProductPageShellProps = ProductPageViewModel;

export function ProductPageShell({ locale, product, labels }: ProductPageShellProps) {
  const displayImages = mapImagesToDisplayAsset(product.images);

  return (
    <article className="min-h-screen bg-[radial-gradient(120%_70%_at_0%_0%,rgba(102,90,184,0.25)_0%,transparent_58%),linear-gradient(to_bottom,var(--blox-bg-top)_0%,var(--blox-bg-bottom)_100%)]">
      <SiteHeader locale={locale} labels={labels.nav} />

      <main className="mx-auto w-full max-w-[1240px] px-4 py-7 md:px-6 md:py-9">
        <div className="mx-auto w-full max-w-[746px]">
          <p className="mb-3 md:mb-4">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="rounded-lg px-2 text-muted-foreground hover:text-foreground"
            >
              <Link href={`/${locale}/games/${product.game.slug}`}>
                <ArrowLeft className="size-4" aria-hidden="true" />
                {labels.nav.backToShop}
              </Link>
            </Button>
          </p>

          <section className="grid items-start gap-4 sm:gap-4 lg:grid-cols-[360px_354px] lg:gap-x-8 lg:gap-y-7">
            <div className="contents lg:col-start-2 lg:row-start-1 lg:block lg:space-y-5">
              <div className="contents lg:block lg:space-y-4">
                <div className="order-1">
                  <ProductIdentity product={product} />
                </div>
                <div className="order-3 mt-0.5 lg:mt-0">
                  <ProductPurchaseActions product={product} labels={labels} />
                </div>
              </div>
              <div className="order-4 pt-0.5 lg:pt-0">
                <TrustBadges
                  badges={product.trustBadges}
                  sectionLabel={labels.product.sections.trust}
                />
              </div>
            </div>

            <ProductGallery
              className="order-2 mt-0.5 w-full max-w-[360px] lg:order-none lg:col-start-1 lg:row-start-1 lg:mt-0"
              images={displayImages}
              secretLabel={labels.product.gallery.secret}
              sectionLabel={labels.product.sections.imageGallery}
              thumbnailsLabel={labels.product.gallery.thumbnails}
            />

            <div className="order-5 lg:order-none lg:col-start-2 lg:row-start-2">
              <ProductDetails product={product} labels={labels} />
            </div>

            <div className="order-6 space-y-8 lg:order-none lg:col-start-1 lg:row-start-2">
              <ProductDescription product={product} labels={labels} />
              <ProductTags product={product} labels={labels} />
            </div>
          </section>
        </div>
      </main>

      <ProductFooter labels={labels} />
    </article>
  );
}
