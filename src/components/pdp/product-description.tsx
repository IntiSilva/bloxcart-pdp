import type { ProductPageViewModel } from "@/components/pdp/types";

type ProductDescriptionProps = Pick<ProductPageViewModel, "product" | "labels">;

function splitDescriptionIntoParagraphs(description: string): string[] {
  const sentences = description.split(/(?<=[.!?])\s+/).filter(Boolean);
  const paragraphs: string[] = [];

  for (let index = 0; index < sentences.length; index += 2) {
    paragraphs.push(sentences.slice(index, index + 2).join(" "));
  }

  return paragraphs.length > 0 ? paragraphs : [description];
}

export function ProductDescription({
  product,
  labels,
}: ProductDescriptionProps) {
  const paragraphs = splitDescriptionIntoParagraphs(product.description);

  return (
    <section aria-labelledby="product-description-title" className="space-y-3">
      <h2 id="product-description-title" className="text-3xl font-semibold text-foreground">
        {labels.product.aboutThisItem}
      </h2>
      <div className="space-y-4 text-base leading-7 text-muted-foreground">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
