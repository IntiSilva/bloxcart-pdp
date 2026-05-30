import { AddToCartCta } from "@/components/pdp/add-to-cart-cta";
import { QuantitySelector } from "@/components/pdp/quantity-selector";
import type { ProductPageViewModel } from "@/components/pdp/types";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
import Image from "next/image";

type ProductPurchaseActionsProps = Pick<ProductPageViewModel, "product" | "labels">;
type ProductIdentityProps = Pick<ProductPageViewModel, "product">;

export function ProductIdentity({ product }: ProductIdentityProps) {
  return (
    <section aria-labelledby="product-title" className="md:space-y-2.5">
      <span className="hidden items-center gap-2 text-sm font-semibold text-foreground md:inline-flex 2xl:text-base">
        <Image
          src="/games/bf.avif"
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          className="size-6 rounded-sm object-cover 2xl:size-7"
        />
        {product.game.name}
      </span>
      <h1
        id="product-title"
        className="font-heading text-balance text-pdp-title leading-none font-extrabold tracking-tight text-foreground 2xl:text-5xl"
      >
        {product.title}
      </h1>
    </section>
  );
}

export function ProductPurchaseActions({
  product,
  labels,
}: ProductPurchaseActionsProps) {
  return (
    <section aria-labelledby="product-title" className="space-y-6 xl:space-y-8 2xl:space-y-9">
      <div className="space-y-2 2xl:space-y-3">
        <p className="text-base text-muted-foreground line-through 2xl:text-xl">
          {product.priceOriginal}
        </p>
        <div className="flex flex-wrap items-center gap-2.5 2xl:gap-3">
          <p className="text-pdp-price leading-none font-semibold text-foreground 2xl:text-6xl">
            {product.priceCurrent}
          </p>
          <Badge className="h-9 gap-1.5 px-1.5 rounded-lg bg-blox-sale text-base font-semibold text-white 2xl:h-10 2xl:px-3 2xl:text-lg">
            <span className="grid size-6 place-items-center rounded-sm bg-white/20 2xl:size-7">
              <Flame className="size-4 fill-white text-white 2xl:size-4.5" aria-hidden="true" />
            </span>
            {product.priceSavings}
          </Badge>
        </div>

        <p className="text-xs text-muted-foreground sm:text-sm 2xl:text-base">
          {product.stock.available ? labels.product.stockIn : labels.product.stockOut}
          {" - "}
          {labels.product.quantity}: {product.stock.quantity}
        </p>
      </div>



      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2.5 sm:gap-3 2xl:gap-4">
        <QuantitySelector
          maxQuantity={product.stock.quantity}
          disabled={!product.stock.available}
          label={labels.product.quantity}
        />
        <AddToCartCta
          label={product.stock.available ? product.ctaLabel : labels.product.stockOut}
          disabled={!product.stock.available}
        />
      </div>
    </section>
  );
}
