"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type AddToCartCtaProps = {
  label: string;
  disabled?: boolean;
};

export function AddToCartCta({ label, disabled = false }: AddToCartCtaProps) {
  const reducedMotion = useReducedMotion();
  const canAnimate = !reducedMotion && !disabled;

  return (
    <motion.div
      whileHover={canAnimate ? { scale: 1.012 } : undefined}
      whileTap={canAnimate ? { scale: 0.985 } : undefined}
      className="w-full"
    >
      <Button
        type="button"
        size="lg"
        className="h-11 w-full rounded-lg text-base font-semibold shadow-[0_0_0_0_rgba(191,63,255,0)] transition-shadow hover:shadow-[0_0_22px_-8px_rgba(191,63,255,0.85)] 2xl:h-15 2xl:gap-2 2xl:px-3.5 2xl:text-xl 2xl:rounded-xl"
        disabled={disabled}
        aria-disabled={disabled}
      >
        <span className="grid size-6 place-items-center rounded-sm bg-white/20 2xl:size-9">
          <ShoppingCart className="size-4 text-white 2xl:size-6" aria-hidden="true" />
        </span>
        {label}
        <ChevronRight className="ml-auto size-4 opacity-85 2xl:size-6" aria-hidden="true" />
      </Button>
    </motion.div>
  );
}
