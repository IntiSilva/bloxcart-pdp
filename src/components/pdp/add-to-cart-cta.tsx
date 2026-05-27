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
        className="h-11 w-full rounded-xl text-base font-semibold shadow-[0_0_0_0_rgba(191,63,255,0)] transition-shadow hover:shadow-[0_0_22px_-8px_rgba(191,63,255,0.85)]"
        disabled={disabled}
        aria-disabled={disabled}
      >
        <ShoppingCart className="size-4" aria-hidden="true" />
        {label}
        <ChevronRight className="ml-auto size-4 opacity-85" aria-hidden="true" />
      </Button>
    </motion.div>
  );
}
