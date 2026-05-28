import { AddToCartCta } from "@/components/pdp/add-to-cart-cta";
import { QuantitySelector } from "@/components/pdp/quantity-selector";
import type { ProductPageViewModel } from "@/components/pdp/types";
import { Badge } from "@/components/ui/badge";

type ProductPurchaseActionsProps = Pick<ProductPageViewModel, "product" | "labels">;
type ProductIdentityProps = Pick<ProductPageViewModel, "product">;

export function ProductIdentity({ product }: ProductIdentityProps) {
  return (
    <section aria-labelledby="product-title" className="space-y-2.5">
      <Badge
        variant="outline"
        className="h-8 rounded-lg border-border/80 bg-muted/55 px-3 text-sm font-medium"
      >
        {product.game.name}
      </Badge>
      <h1
        id="product-title"
        className="text-balance text-[3rem] leading-[0.96] font-semibold tracking-tight text-foreground sm:text-[3.2rem]"
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
    <section aria-labelledby="product-title" className="space-y-4">
      <div className="space-y-1">
        <p className="text-lg text-muted-foreground line-through">
          {product.priceOriginal}
        </p>
        <div className="flex flex-wrap items-center gap-2.5">
          <p className="text-[3.35rem] leading-none font-semibold text-foreground sm:text-[3.55rem]">
            {product.priceCurrent}
          </p>
          <Badge className="h-9 rounded-lg bg-blox-sale px-3 text-base font-semibold text-white">
            {product.priceSavings}
          </Badge>
        </div>
      </div>

      <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
        {product.stock.available ? labels.product.stockIn : labels.product.stockOut}
        {" - "}
        {labels.product.quantity}: {product.stock.quantity}
      </p>

      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2.5 sm:gap-3">
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
