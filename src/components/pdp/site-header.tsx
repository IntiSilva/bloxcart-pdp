import { Button } from "@/components/ui/button";
import type { ProductPageLabels, ProductPageViewModel } from "@/components/pdp/types";
import {
  ChevronDown,
  Clock3,
  Gamepad2,
  Headphones,
  Menu,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";

type SiteHeaderProps = Pick<ProductPageViewModel, "product"> & {
  labels: ProductPageLabels["nav"];
};

export function SiteHeader({ product, labels }: SiteHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-border/70 bg-[var(--blox-header)]/88 backdrop-blur supports-[backdrop-filter]:bg-[var(--blox-header)]/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-44 bg-[radial-gradient(circle,rgba(175,135,255,0.22)_2px,transparent_2px)] [background-size:12px_12px] md:block"
      />
      <div className="relative mx-auto flex h-16 w-full max-w-[1240px] items-center gap-2 px-4 md:h-[72px] md:gap-3 md:px-6">
        <Link
          href="#"
          aria-label={labels.brand}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl p-1.5 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-primary/25 text-lg leading-none font-extrabold text-primary"
          >
            b
          </span>
          <span className="hidden text-[1.75rem] leading-none font-semibold tracking-tight md:inline">
            {labels.brand}
          </span>
        </Link>

        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-10 min-w-0 max-w-[220px] flex-1 justify-between rounded-xl border-border/80 bg-muted/55 px-2.5 md:max-w-[228px] md:flex-none"
          aria-label={product.game.name}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="grid size-6 place-items-center rounded-md bg-primary/20">
              <Gamepad2 className="size-3.5 text-primary" aria-hidden="true" />
            </span>
            <span className="truncate text-sm font-medium">{product.game.name}</span>
          </span>
          <ChevronDown className="size-4 opacity-75" aria-hidden="true" />
        </Button>

        <nav
          aria-label="Site utilities"
          className="ml-auto hidden items-center gap-2 lg:flex"
        >
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="h-10 rounded-xl border-border/80 bg-muted/45 px-3 text-sm font-medium"
            aria-label={labels.orderStatus}
          >
            <Clock3 className="size-3.5" aria-hidden="true" />
            {labels.orderStatus}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="h-10 rounded-xl border-border/80 bg-muted/45 px-3 text-sm font-medium"
            aria-label={labels.support247}
          >
            <Headphones className="size-3.5" aria-hidden="true" />
            {labels.support247}
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="hidden h-10 rounded-xl border-border/80 bg-muted/55 px-3 text-sm font-medium md:inline-flex"
            aria-label={labels.currency}
          >
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            {labels.currency}
          </Button>
          <Button
            type="button"
            size="lg"
            className="hidden h-10 rounded-xl px-4 text-sm font-semibold md:inline-flex"
            aria-label={labels.signIn}
          >
            <User className="size-4" aria-hidden="true" />
            {labels.signIn}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="size-10 rounded-xl border-border/80 bg-muted/55 md:hidden"
            aria-label={labels.menu}
          >
            <Menu className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  );
}
