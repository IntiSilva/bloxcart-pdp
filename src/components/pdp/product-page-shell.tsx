import { ProductDescription } from "@/components/pdp/product-description";
import { ProductDetails } from "@/components/pdp/product-details";
import { ProductFooter } from "@/components/pdp/product-footer";
import { ProductGallery } from "@/components/pdp/product-gallery";
import { ProductIdentity, ProductPurchasePanel } from "@/components/pdp/product-purchase-panel";
import { ProductTags } from "@/components/pdp/product-tags";
import { SiteHeader } from "@/components/pdp/site-header";
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
      <SiteHeader product={product} labels={labels.nav} />

      <main className="mx-auto w-full max-w-[1240px] px-4 py-7 md:px-6 md:py-9">
        <div className="mx-auto w-full max-w-[746px]">
          <p className="mb-4">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="rounded-xl px-2 text-muted-foreground hover:text-foreground"
            >
              <Link href={`/${locale}/games/${product.game.slug}`}>
                <ArrowLeft className="size-4" aria-hidden="true" />
                {labels.nav.backToShop}
              </Link>
            </Button>
          </p>

          <div className="grid items-start gap-4 lg:grid-cols-[360px_354px] lg:gap-8">
            <div className="order-1 lg:col-start-2">
              <ProductIdentity product={product} />
            </div>
            <ProductGallery
              className="order-2 w-full max-w-[360px] lg:col-start-1 lg:row-span-2"
              images={displayImages}
              secretLabel={labels.product.gallery.secret}
              sectionLabel={labels.product.sections.imageGallery}
              thumbnailsLabel={labels.product.gallery.thumbnails}
            />
            <div className="order-3 space-y-6 lg:col-start-2">
              <ProductPurchasePanel product={product} labels={labels} />
              <ProductDetails product={product} labels={labels} />
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <ProductDescription product={product} labels={labels} />
            <ProductTags product={product} labels={labels} />
          </div>
        </div>
      </main>

      <ProductFooter labels={labels} />
    </article>
  );
}
