import type { ProductPageViewModel } from "@/components/pdp/types";
import { Card } from "@/components/ui/card";
import { Gem, Zap } from "lucide-react";

type ProductDetailsProps = Pick<ProductPageViewModel, "product" | "labels">;

function formatDeliveryValue(delivery: string): string {
  return delivery.replace(/under\s*5\s*min/i, "\u22645 min");
}

export function ProductDetails({ product, labels }: ProductDetailsProps) {
  const rows = [
    { label: labels.product.details.category, value: product.category },
    {
      label: labels.product.details.rarity,
      value: (
        <span className="inline-flex items-center gap-1.5 rounded-md bg-blox-rarity-mythical/10 px-2 py-1 text-xs font-semibold text-blox-rarity-mythical 2xl:gap-2 2xl:px-2.5 2xl:py-1.5 2xl:text-sm">
          <span className="grid size-4 place-items-center rounded-sm bg-blox-rarity-mythical 2xl:size-5">
            <Gem className="size-2.5 text-white 2xl:size-3" aria-hidden="true" />
          </span>
          {product.rarity}
        </span>
      ),
    },
    { label: labels.product.details.game, value: product.game.name },
    {
      label: labels.product.details.delivery,
      value: (
        <span className="inline-flex items-center gap-1.5 2xl:gap-2">
          <span className="grid size-4 place-items-center rounded-sm bg-white/10 2xl:size-5">
            <Zap className="size-2.5 text-white 2xl:size-3" aria-hidden="true" />
          </span>
          {formatDeliveryValue(product.delivery)}
        </span>
      ),
    },
    { label: labels.product.details.condition, value: product.condition },
  ];

  return (
    <section aria-label={labels.product.sections.details}>
      <Card className="rounded-xl border border-border/70 bg-card/70 px-0 py-0 2xl:rounded-2xl  ">
        <dl>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[minmax(100px,1fr)_1fr] items-center gap-4 px-4 py-3 text-sm not-last:border-b not-last:border-border/70 2xl:py-4 2xl:text-base"
            >
              <dt className="text-white/70 2xl:text-base">{row.label}</dt>
              <dd className="justify-self-end text-right font-medium text-foreground 2xl:text-base">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </section>
  );
}
