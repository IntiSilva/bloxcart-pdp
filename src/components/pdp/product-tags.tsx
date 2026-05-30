import type { ProductPageViewModel } from "@/components/pdp/types";
import { Badge } from "@/components/ui/badge";

type ProductTagsProps = Pick<ProductPageViewModel, "product" | "labels">;

export function ProductTags({ product, labels }: ProductTagsProps) {
  return (
    <section aria-label={labels.product.sections.tags} className="space-y-2 2xl:space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground 2xl:text-base">
        {labels.product.sections.tags}
      </h2>
      <ul className="flex flex-wrap gap-2 2xl:gap-2.5">
        {product.tags.map((tag) => (
          <li key={tag}>
            <Badge
              variant="outline"
              className="h-7 rounded-lg border-border/80 bg-card/60 px-2.5 text-xs text-white/40 2xl:h-8 2xl:px-3 2xl:text-sm"
            >
              {tag}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
