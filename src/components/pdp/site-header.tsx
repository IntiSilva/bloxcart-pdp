import { GameSelector } from "@/components/pdp/game-selector";
import { LocaleCurrencySwitcher } from "@/components/pdp/locale-currency-switcher";
import type { ProductPageLabels } from "@/components/pdp/types";
import { Button } from "@/components/ui/button";
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
      className="inline-flex shrink-0 items-center rounded-lg lg:p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
    >
      <Image
        src="/logo-mobile.webp"
        alt=""
        aria-hidden="true"
        width={210}
        height={200}
        className="h-8.5 w-auto md:hidden"
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
      className="h-9 gap-2 rounded-lg px-1.5 text-sm font-medium text-zinc-100"
      aria-label={ariaLabel}
    >
      <span
        className={cn(
          "flex size-6.5 items-center justify-center rounded-lg",
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
      className="h-11.5 min-w-28 gap-2 rounded-lg bg-blox-primary pl-4 pr-5 text-sm font-semibold text-white hover:bg-blox-primary-hover"
      aria-label={ariaLabel}
    >
      <span className="flex size-6 items-center justify-center rounded-md bg-white/20">
        <User className="size-3.5 text-white" aria-hidden="true" />
      </span>
      {label}
    </Button>
  );
}

type MobileMenuButtonProps = {
  ariaLabel: string;
};

function MobileMenuButton({ ariaLabel }: MobileMenuButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className="size-11.5 p-0 rounded-xl border-blox-border bg-transparent md:hidden"
      aria-label={ariaLabel}
    >
      <Menu className="size-7" aria-hidden="true" />
    </Button>
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
      <div className="relative z-10 mx-auto flex h-full w-full max-w-310 items-center gap-2 px-4 md:gap-2.5 md:px-6">
        <HeaderLogo locale={locale} ariaLabel={labels.brand} />

        <GameSelector className="mx-auto md:mx-0 shrink-0" />

        <nav
          aria-label="Site utilities"
          className="hidden items-center gap-2 lg:flex"
        >
          <HeaderUtilityAction
            label={labels.orderStatus}
            ariaLabel={labels.orderStatus}
            icon={<Clock3 className="size-3.5 text-white" aria-hidden="true" />}
            iconBackgroundClassName="bg-blox-warning"
          />
          <HeaderUtilityAction
            label={labels.support247}
            ariaLabel={labels.support247}
            icon={<Headphones className="size-3.5 text-white" aria-hidden="true" />}
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

        <MobileMenuButton ariaLabel={labels.menu} />
      </div>
    </header>
  );
}
