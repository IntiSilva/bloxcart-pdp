import type { ProductPageViewModel } from "@/components/pdp/types";
import { Badge } from "@/components/ui/badge";

type ProductTagsProps = Pick<ProductPageViewModel, "product" | "labels">;

export function ProductTags({ product, labels }: ProductTagsProps) {
  return (
    <section aria-label={labels.product.sections.tags} className="space-y-2">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {labels.product.sections.tags}
      </h2>
      <ul className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <li key={tag}>
            <Badge
              variant="outline"
              className="h-7 rounded-lg border-border/80 bg-card/60 px-2.5 text-xs text-muted-foreground"
            >
              {tag}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
