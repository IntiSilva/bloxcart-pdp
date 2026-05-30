import type { ProductPageLabels } from "@/components/pdp/types";
import { LocaleCurrencySwitcher } from "@/components/pdp/locale-currency-switcher";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import { buildLocalizedProductPath } from "@/lib/product/product-routing";
import { ArrowUpRight, Headphones } from "lucide-react";
import Image from "next/image";

type ProductFooterProps = {
  locale: Locale;
  labels: ProductPageLabels;
};

const SOCIAL_LINKS = [
  { label: "Discord", href: "#", iconSrc: "/assets/icons/discord.svg" },
  { label: "YouTube", href: "#", iconSrc: "/assets/icons/youtube.svg" },
  { label: "X", href: "#", iconSrc: "/assets/icons/x.svg" },
  { label: "TikTok", href: "#", iconSrc: "/assets/icons/tiktok.svg" },
] as const;

type FooterLinkItem = {
  label: string;
  href: string;
};

const FOOTER_LINK_CLASSNAME =
  "rounded-md text-sm text-blox-footer-text transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 2xl:text-base";

export function ProductFooter({ locale, labels }: ProductFooterProps) {
  const localeOptions = [
    {
      locale: "en-US" as const,
      label: "United States",
      currency: "USD" as const,
      flagSrc: "/flags/us.svg",
      href: buildLocalizedProductPath("en-US"),
    },
    {
      locale: "es-ES" as const,
      label: "Espa\u00f1a",
      currency: "EUR" as const,
      flagSrc: "/flags/es.svg",
      href: buildLocalizedProductPath("es-ES"),
    },
  ];

  const supportItems: FooterLinkItem[] = [
    { label: labels.footer.chatCta, href: "#" },
    { label: labels.footer.claimOrder, href: "#" },
  ];

  const resourceItems: FooterLinkItem[] = [
    { label: labels.footer.blogs, href: "#" },
    { label: labels.footer.affiliates, href: "#" },
    { label: labels.footer.claimOrder, href: "#" },
    { label: labels.footer.tutorial, href: "#" },
  ];

  const legalItems: FooterLinkItem[] = [{ label: labels.footer.terms, href: "#" }];

  return (
    <footer className="mt-12 border-t border-blox-border bg-blox-footer">
      <div className="mx-auto grid w-full max-w-pdp-rail gap-7 px-4 py-10 md:px-6 2xl:max-w-pdp-rail-wide">
        <div className="grid gap-7 lg:grid-cols-[minmax(280px,380px)_1fr] lg:items-start lg:gap-8 xl:gap-10 2xl:gap-12">
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left lg:max-w-sm">
            <Image
              src="/logo-desktop.webp"
              alt={labels.nav.brand}
              width={896}
              height={200}
              className="h-8 w-auto md:h-9"
            />
            <p className="max-w-3xl text-sm text-blox-footer-text/40 lg:max-w-none">
              {labels.footer.marketplaceNote}
            </p>
            <div className="md:hidden">
              <LocaleCurrencySwitcher
                currentLocale={locale}
                options={localeOptions}
                ariaLabel={locale === "es-ES" ? "Moneda e idioma" : "Currency and locale"}
              />
            </div>
          </div>

          <div className="grid gap-2 md:hidden">
            <Accordion type="single" collapsible defaultValue="resources" className="gap-2">
              <AccordionItem
                value="support"
                className="rounded-xl border border-blox-border bg-blox-control px-3 not-last:border-b-0"
              >
                <AccordionTrigger className="py-3 text-white hover:no-underline">
                  {labels.footer.support}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {supportItems.map((item) => (
                      <li key={`${item.label}-support`}>
                        <FooterLink item={item} />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="resources"
                className="rounded-xl border border-blox-border bg-blox-control px-3 not-last:border-b-0"
              >
                <AccordionTrigger className="py-3 text-white hover:no-underline">
                  {labels.footer.resources}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {resourceItems.map((item) => (
                      <li key={`${item.label}-resources`}>
                        <FooterLink item={item} />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="legal"
                className="rounded-xl border border-blox-border bg-blox-control px-3 not-last:border-b-0"
              >
                <AccordionTrigger className="py-3 text-white hover:no-underline">
                  {labels.footer.legal}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {legalItems.map((item) => (
                      <li key={`${item.label}-legal`}>
                        <FooterLink item={item} />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="hidden grid-cols-3 gap-4 md:mx-auto md:grid md:w-full md:max-w-4xl md:justify-items-center md:gap-6 lg:mx-0 lg:max-w-none lg:justify-items-stretch lg:gap-4 xl:gap-5 2xl:gap-6">
            <FooterLinkColumn title={labels.footer.support} items={supportItems} />
            <FooterLinkColumn title={labels.footer.resources} items={resourceItems} />
            <FooterLinkColumn title={labels.footer.legal} items={legalItems} />
          </div>
        </div>

        <div className="rounded-2xl p-5 text-center md:flex md:items-center md:justify-between md:gap-8 md:rounded-xl md:border md:border-blox-border md:bg-blox-surface-soft/45 md:text-left 2xl:p-6 2xl:gap-10">
          <div className="md:max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">{labels.footer.needHelp}</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-blox-footer-text md:mx-0 2xl:text-base 2xl:leading-7">
              {labels.footer.helpDescription}
            </p>
          </div>
          <Button
            type="button"
            size="lg"
            className="mt-4 h-11 rounded-xl bg-blox-info font-semibold text-white hover:bg-blox-info/90 md:mt-0 md:shrink-0 2xl:h-12 2xl:px-4"
          >
            <span className="grid size-6 place-items-center rounded-sm bg-white/20 2xl:size-7">
              <Headphones className="size-3.5 text-white 2xl:size-4" aria-hidden="true" />
            </span>
            {labels.footer.chatCta}
          </Button>
        </div>

        <div className="border-t border-blox-border pt-5 md:flex md:items-center md:justify-between md:gap-8 2xl:pt-6">
          <p className="mx-auto max-w-3xl text-center text-sm text-blox-footer-text/40 md:mx-0 md:max-w-none md:flex-1 md:text-left 2xl:text-base">
            {labels.footer.copyright}
          </p>
          <ul className="mt-4 flex items-center justify-center gap-2 md:mt-0 md:shrink-0 md:justify-end 2xl:gap-2.5">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-lg border border-blox-border bg-blox-control text-xs font-semibold text-white/80 transition-colors hover:bg-blox-control-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 2xl:size-10"
                >
                  <Image
                    src={social.iconSrc}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="size-4 object-contain 2xl:size-4.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkColumnProps = {
  title: string;
  items: FooterLinkItem[];
};

function FooterLink({ item }: { item: FooterLinkItem }) {
  return (
    <a href={item.href} className={`${FOOTER_LINK_CLASSNAME} flex items-center justify-between gap-2`}>
      <span>{item.label}</span>
      <ArrowUpRight className="size-3.5 text-blox-footer-text/70 2xl:size-4" aria-hidden="true" />
    </a>
  );
}

function FooterLinkColumn({ title, items }: FooterLinkColumnProps) {
  return (
    <div className="w-full rounded-xl border border-blox-border bg-blox-control/55 p-3 md:max-w-3xs lg:max-w-none 2xl:p-5">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/55 2xl:text-base">
        {title}
      </h3>
      <ul className="space-y-1.5 2xl:space-y-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <FooterLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
