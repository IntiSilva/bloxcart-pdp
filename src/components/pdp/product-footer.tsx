import type { ProductPageLabels } from "@/components/pdp/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

type ProductFooterProps = {
  labels: ProductPageLabels;
};

const SUPPORT_LINK_HREFS = ["#", "#", "#", "#"] as const;
const FOOTER_LINK_CLASSNAME =
  "rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70";

export function ProductFooter({ labels }: ProductFooterProps) {
  const resourceItems = [
    labels.footer.blogs,
    labels.footer.affiliates,
    labels.footer.claimOrder,
    labels.footer.tutorial,
  ];

  const legalItems = [labels.footer.terms];

  return (
    <footer className="mt-12 border-t border-border/70 bg-card/40">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-4 py-10 md:px-6">
        <div className="space-y-3">
          <p className="text-3xl font-semibold tracking-tight text-foreground">
            {labels.nav.brand}
          </p>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            {labels.footer.marketplaceNote}
          </p>
          <Badge
            variant="outline"
            className="h-9 rounded-xl border-border/80 bg-muted/60 px-3 text-sm"
          >
            {labels.nav.currency}
          </Badge>
        </div>

        <div className="grid gap-4 md:hidden">
          <Accordion type="single" collapsible className="rounded-xl border border-border/70 bg-card/60 px-3">
            <AccordionItem value="support">
              <AccordionTrigger>{labels.footer.support}</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {resourceItems.map((item, index) => (
                    <li key={`${item}-${index}`}>
                      <a href={SUPPORT_LINK_HREFS[index]} className={FOOTER_LINK_CLASSNAME}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources">
              <AccordionTrigger>{labels.footer.resources}</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {resourceItems.map((item, index) => (
                    <li key={`${item}-${index}`}>
                      <a href={SUPPORT_LINK_HREFS[index]} className={FOOTER_LINK_CLASSNAME}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="legal">
              <AccordionTrigger>{labels.footer.legal}</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {legalItems.map((item) => (
                    <li key={item}>
                      <a href="#" className={FOOTER_LINK_CLASSNAME}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="hidden grid-cols-3 gap-8 md:grid">
          <FooterLinkColumn title={labels.footer.support} items={resourceItems} />
          <FooterLinkColumn title={labels.footer.resources} items={resourceItems} />
          <FooterLinkColumn title={labels.footer.legal} items={legalItems} />
        </div>

        <div className="rounded-2xl border border-border/70 bg-card/70 p-5 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-foreground">{labels.footer.needHelp}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {labels.footer.helpDescription}
          </p>
          <Button type="button" size="lg" className="mt-4 h-11 rounded-xl px-5 font-semibold">
            <Headphones className="size-4" aria-hidden="true" />
            {labels.footer.chatCta}
          </Button>
        </div>

        <p className="border-t border-border/70 pt-5 text-sm text-muted-foreground">
          {labels.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

type FooterLinkColumnProps = {
  title: string;
  items: string[];
};

function FooterLinkColumn({ title, items }: FooterLinkColumnProps) {
  return (
    <div className="rounded-xl border border-border/70 bg-card/50 p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>
            <a
              href="#"
              className="rounded-md text-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
