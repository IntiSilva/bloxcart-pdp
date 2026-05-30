"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type LocaleCurrencyOption = {
  locale: Locale;
  label: string;
  currency: "USD" | "EUR";
  flagSrc: string;
  href: string;
};

type LocaleCurrencySwitcherProps = {
  currentLocale: Locale;
  options: LocaleCurrencyOption[];
  ariaLabel: string;
};

export function LocaleCurrencySwitcher({
  currentLocale,
  options,
  ariaLabel,
}: LocaleCurrencySwitcherProps) {
  const router = useRouter();
  const selectedOption =
    options.find((option) => option.locale === currentLocale) ?? options[0];

  if (!selectedOption) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-10 shrink-0 justify-center gap-2 rounded-lg border-blox-border bg-blox-control px-3 text-sm font-medium text-zinc-100 hover:bg-blox-control-hover 2xl:h-11 2xl:px-3"
          aria-label={ariaLabel}
        >
          <span className="relative block size-6 overflow-hidden rounded-md">
            <Image
              src={selectedOption.flagSrc}
              alt=""
              aria-hidden="true"
              fill
              sizes="24px"
              className="scale-150 object-cover"
            />
          </span>
          <span>{selectedOption.currency}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-max min-w-45 rounded-lg border border-blox-border bg-blox-surface p-1.5 space-y-2"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.locale}
            onSelect={() => {
              if (option.locale !== currentLocale) {
                router.push(option.href);
              }
            }}
            className={cn(
              "gap-2 rounded-lg px-2 py-2 text-sm focus:bg-primary/14 focus:text-foreground",
              option.locale === currentLocale && "bg-primary/14"
            )}
          >
            <span className="relative block size-6 shrink-0 overflow-hidden rounded-md">
              <Image
                src={option.flagSrc}
                alt=""
                aria-hidden="true"
                fill
                sizes="24px"
                className="scale-150 object-cover"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium leading-tight">
                {option.label}
              </span>
              <span className="block truncate text-xs text-muted-foreground leading-tight">
                {option.currency} / {option.locale}
              </span>
            </span>
            <Check
              className={cn(
                "size-3.5 text-primary opacity-0",
                option.locale === currentLocale && "opacity-100"
              )}
              aria-hidden="true"
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
