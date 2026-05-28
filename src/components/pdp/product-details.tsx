import type { ProductPageViewModel } from "@/components/pdp/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ProductDetailsProps = Pick<ProductPageViewModel, "product" | "labels">;

export function ProductDetails({ product, labels }: ProductDetailsProps) {
  const rows = [
    { label: labels.product.details.category, value: product.category },
    {
      label: labels.product.details.rarity,
      value: (
        <Badge variant="secondary" className="h-7 rounded-lg px-2.5 text-xs">
          {product.rarity}
        </Badge>
      ),
    },
    { label: labels.product.details.game, value: product.game.name },
    { label: labels.product.details.delivery, value: product.delivery },
    { label: labels.product.details.condition, value: product.condition },
  ];

  return (
    <section aria-label={labels.product.sections.details}>
      <Card className="rounded-xl border border-border/70 bg-card/70 px-0 py-0">
        <h2 className="border-b border-border/70 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {labels.product.sections.details}
        </h2>
        <dl>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[minmax(100px,1fr)_1fr] items-center gap-4 px-4 py-3 text-sm not-last:border-b not-last:border-border/70"
            >
              <dt className="text-muted-foreground">{row.label}</dt>
              <dd className="justify-self-end text-right font-medium text-foreground">
                {typeof row.value === "string" ? row.value : row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </section>
  );
}
