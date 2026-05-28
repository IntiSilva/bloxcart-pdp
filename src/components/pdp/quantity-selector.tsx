"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";

type QuantitySelectorProps = {
  maxQuantity: number;
  disabled?: boolean;
  label: string;
};

export function QuantitySelector({
  maxQuantity,
  disabled = false,
  label,
}: QuantitySelectorProps) {
  const boundedMax = useMemo(() => Math.max(1, maxQuantity), [maxQuantity]);
  const [quantity, setQuantity] = useState(1);
  const reducedMotion = useReducedMotion();
  const canDecrease = quantity > 1 && !disabled;
  const canIncrease = quantity < boundedMax && !disabled;
  const tapScale = reducedMotion ? undefined : { scale: 0.9 };

  return (
    <div
      className="inline-flex h-11 items-center rounded-lg border border-border/80 bg-card/70 p-1"
      role="group"
      aria-label={label}
    >
      <motion.div whileTap={canDecrease ? tapScale : undefined}>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="rounded-lg"
          onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          aria-label={`${label} minus`}
          disabled={!canDecrease}
        >
          <Minus className="size-4" />
        </Button>
      </motion.div>
      <span
        aria-live="polite"
        className="inline-flex min-w-10 justify-center px-2 text-center text-sm font-semibold text-foreground"
      >
        {quantity}
      </span>
      <motion.div whileTap={canIncrease ? tapScale : undefined}>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="rounded-lg"
          onClick={() => setQuantity((current) => Math.min(boundedMax, current + 1))}
          aria-label={`${label} plus`}
          disabled={!canIncrease}
        >
          <Plus className="size-4" />
        </Button>
      </motion.div>
    </div>
  );
}
