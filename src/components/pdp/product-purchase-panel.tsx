import { AddToCartCta } from "@/components/pdp/add-to-cart-cta";
import { QuantitySelector } from "@/components/pdp/quantity-selector";
import { TrustBadges } from "@/components/pdp/trust-badges";
import type { ProductPageViewModel } from "@/components/pdp/types";
import { Badge } from "@/components/ui/badge";

type ProductPurchasePanelProps = Pick<ProductPageViewModel, "product" | "labels">;
type ProductIdentityProps = Pick<ProductPageViewModel, "product">;

export function ProductIdentity({ product }: ProductIdentityProps) {
  return (
    <section aria-labelledby="product-title" className="space-y-3">
      <Badge
        variant="outline"
        className="h-8 rounded-xl border-border/80 bg-muted/55 px-3 text-sm"
      >
        {product.game.name}
      </Badge>
      <h1
        id="product-title"
        className="text-balance text-[2.75rem] leading-[0.98] font-semibold tracking-tight text-foreground sm:text-[3rem]"
      >
        {product.title}
      </h1>
    </section>
  );
}

export function ProductPurchasePanel({
  product,
  labels,
}: ProductPurchasePanelProps) {
  return (
    <section aria-labelledby="product-title" className="space-y-5">
      <div className="space-y-1.5">
        <p className="text-lg text-muted-foreground line-through">
          {product.priceOriginal}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-[3.55rem] leading-none font-semibold text-foreground">
            {product.priceCurrent}
          </p>
          <Badge className="h-9 rounded-xl bg-[var(--blox-sale)] px-3 text-base font-semibold text-white">
            {product.priceSavings}
          </Badge>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        {product.stock.available ? labels.product.stockIn : labels.product.stockOut}
        {" - "}
        {labels.product.quantity}: {product.stock.quantity}
      </p>

      <div className="grid grid-cols-[auto_1fr] gap-3">
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

      <TrustBadges
        badges={product.trustBadges}
        sectionLabel={labels.product.sections.trust}
      />
    </section>
  );
}
