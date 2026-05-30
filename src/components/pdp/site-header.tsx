import { GameSelector } from "@/components/pdp/game-selector";
import { LocaleCurrencySwitcher } from "@/components/pdp/locale-currency-switcher";
import type { ProductPageLabels } from "@/components/pdp/types";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { Locale } from "@/lib/i18n/config";
import { buildLocalizedProductPath } from "@/lib/product/product-routing";
import { cn } from "@/lib/utils";
import { Clock3, Headphones, Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SiteHeaderProps = {
  locale: Locale;
  labels: ProductPageLabels["nav"];
};

function HeaderDots() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-25 bg-[url('/assets/dots.svg')] bg-top-left bg-no-repeat md:hidden"
        style={{
          backgroundSize: "auto 125%",
          maskImage: "linear-gradient(to right, black 0%, black 45%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 45%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-65 bg-[url('/assets/dots.svg')] bg-top-left bg-no-repeat md:block"
        style={{
          backgroundSize: "auto 100%",
          maskImage: "linear-gradient(to right, black 0%, black 68%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 68%, transparent 100%)",
        }}
      />
    </>
  );
}

type HeaderLogoProps = {
  locale: Locale;
  ariaLabel: string;
};

function HeaderLogo({ locale, ariaLabel }: HeaderLogoProps) {
  return (
    <Link
      href={`/${locale}`}
      aria-label={ariaLabel}
      className="inline-flex shrink-0 items-center rounded-lg xl:p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
    >
      <Image
        src="/logo-mobile.webp"
        alt=""
        aria-hidden="true"
        width={210}
        height={200}
        className="h-8 w-auto md:hidden"
      />
      <Image
        src="/logo-desktop.webp"
        alt=""
        aria-hidden="true"
        width={896}
        height={200}
        className="hidden h-9 w-auto md:block"
      />
    </Link>
  );
}

type HeaderUtilityActionProps = {
  label: string;
  ariaLabel: string;
  icon: ReactNode;
  iconBackgroundClassName: string;
};

function HeaderUtilityAction({
  label,
  ariaLabel,
  icon,
  iconBackgroundClassName,
}: HeaderUtilityActionProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="lg"
      className="h-9 gap-2 rounded-lg px-1.5 text-sm font-medium text-zinc-100 2xl:h-10 2xl:px-2"
      aria-label={ariaLabel}
    >
      <span
        className={cn(
          "flex size-6.5 items-center justify-center rounded-lg 2xl:size-7",
          iconBackgroundClassName
        )}
      >
        {icon}
      </span>
      {label}
    </Button>
  );
}

type SignInButtonProps = {
  label: string;
  ariaLabel: string;
};

function SignInButton({ label, ariaLabel }: SignInButtonProps) {
  return (
    <Button
      type="button"
      size="lg"
      className="h-10 min-w-28 gap-2 rounded-lg bg-blox-primary pl-3 pr-4 text-sm font-semibold text-white hover:bg-blox-primary-hover 2xl:h-11 2xl:pl-4 2xl:pr-5 2xl:text-base"
      aria-label={ariaLabel}
    >
      <span className="flex size-5 items-center justify-center rounded-md bg-white/20 2xl:size-6">
        <User className="size-3.5 text-white 2xl:size-4" aria-hidden="true" />
      </span>
      {label}
    </Button>
  );
}

type MobileMenuButtonProps = {
  ariaLabel: string;
  locale: Locale;
  labels: ProductPageLabels["nav"];
  localeOptions: {
    locale: Locale;
    label: string;
    currency: "USD" | "EUR";
    flagSrc: string;
    href: string;
  }[];
};

function MobileMenuButton({
  ariaLabel,
  locale,
  labels,
  localeOptions,
}: MobileMenuButtonProps) {
  const isSpanish = locale === "es-ES";

  return (
    <Drawer>
      <DrawerTrigger
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-xl border border-blox-border bg-transparent p-0 text-foreground transition-colors hover:bg-blox-control-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 md:hidden"
        aria-label={ariaLabel}
      >
        <Menu className="size-6" aria-hidden="true" />
      </DrawerTrigger>
      <DrawerContent className="overflow-hidden border-blox-border bg-blox-surface p-0 text-foreground md:hidden data-[vaul-drawer-direction=bottom]:max-h-[82dvh] [&>div:first-child]:mt-3 [&>div:first-child]:h-1.5 [&>div:first-child]:w-24 [&>div:first-child]:rounded-full [&>div:first-child]:bg-white/25">
        <DrawerHeader className="border-b border-blox-border px-4 py-3">
          <div className="space-y-0.5 text-left">
            <DrawerTitle className="text-sm font-semibold tracking-wide text-white/95">
              BloxCart Menu
            </DrawerTitle>
            <DrawerDescription className="text-xs text-blox-footer-text">
              {isSpanish
                ? "Accesos r\u00e1pidos para la navegaci\u00f3n m\u00f3vil."
                : "Quick access for mobile navigation."}
            </DrawerDescription>
          </div>
        </DrawerHeader>

        <div className="blox-scrollbar max-h-[calc(82dvh-4.5rem)] overflow-y-auto px-4 py-4">
          <div className="space-y-4">
            <section className="rounded-2xl border border-blox-border bg-blox-surface-soft/40 p-3">
              <p className="mb-2 text-[11px] font-medium tracking-wide text-blox-footer-text/80 uppercase">
                {isSpanish ? "Contexto" : "Context"}
              </p>
              <div className="space-y-2.5">
                <GameSelector className="w-full mx-0" />
                <div className="flex items-center justify-between gap-2 rounded-xl border border-blox-border/70 bg-blox-control/35 p-2">
                  <span className="pl-1 text-[11px] font-medium tracking-wide text-blox-footer-text/80 uppercase">
                    {isSpanish ? "Moneda e idioma" : "Currency & locale"}
                  </span>
                  <LocaleCurrencySwitcher
                    currentLocale={locale}
                    options={localeOptions}
                    ariaLabel={isSpanish ? "Moneda e idioma" : "Currency and locale"}
                  />
                </div>
              </div>
            </section>

            <section className="space-y-2.5">
              <p className="text-[11px] font-medium tracking-wide text-blox-footer-text/80 uppercase">
                {isSpanish ? "Accesos r\u00e1pidos" : "Quick actions"}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <div
                  className="rounded-xl border border-blox-border bg-blox-control/45 p-3"
                  aria-disabled="true"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-lg bg-blox-warning/85">
                      <Clock3 className="size-4 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-tight text-zinc-100">
                      {labels.orderStatus}
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-xl border border-blox-border bg-blox-control/45 p-3"
                  aria-disabled="true"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-lg bg-blox-info/85">
                      <Headphones className="size-4 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-tight text-zinc-100">
                      {labels.support247}
                    </span>
                  </div>
                </div>

                <div
                  className="col-span-2 rounded-xl border border-blox-border bg-blox-control/45 p-3"
                  aria-disabled="true"
                >
                  <div className="flex items-center justify-center gap-2.5 text-center">
                    <span className="grid size-8 place-items-center rounded-lg bg-blox-primary/85">
                      <User className="size-4 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-tight text-zinc-100">
                      {labels.signIn}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export function SiteHeader({ locale, labels }: SiteHeaderProps) {
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

  return (
    <header className="relative h-19.5 overflow-hidden border-b border-blox-border bg-blox-header md:h-21.5">
      <HeaderDots />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-pdp-rail items-center gap-2 px-4 md:gap-2.5 md:px-6 2xl:max-w-pdp-rail-wide">
        <HeaderLogo locale={locale} ariaLabel={labels.brand} />

        <GameSelector className="mx-auto md:mx-0" />

        <nav
          aria-label="Site utilities"
          className="hidden items-center gap-2 xl:flex"
        >
          <HeaderUtilityAction
            label={labels.orderStatus}
            ariaLabel={labels.orderStatus}
            icon={<Clock3 className="size-3.5 text-white 2xl:size-4" aria-hidden="true" />}
            iconBackgroundClassName="bg-blox-warning"
          />
          <HeaderUtilityAction
            label={labels.support247}
            ariaLabel={labels.support247}
            icon={<Headphones className="size-3.5 text-white 2xl:size-4" aria-hidden="true" />}
            iconBackgroundClassName="bg-blox-info"
          />
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <LocaleCurrencySwitcher
            currentLocale={locale}
            options={localeOptions}
            ariaLabel={locale === "es-ES" ? "Moneda e idioma" : "Currency and locale"}
          />
          <SignInButton label={labels.signIn} ariaLabel={labels.signIn} />
        </div>

        <MobileMenuButton
          ariaLabel={labels.menu}
          locale={locale}
          labels={labels}
          localeOptions={localeOptions}
        />
      </div>
    </header>
  );
}
