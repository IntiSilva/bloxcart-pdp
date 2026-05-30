"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  const counterChipClassName = "grid size-7 place-items-center rounded-md p-0 2xl:size-9";
  const counterIconButtonClassName = cn(
    counterChipClassName,
    "bg-blox-control-accent/20 hover:bg-blox-control-accent/10 disabled:opacity-30",
  );
  const boundedMax = useMemo(() => Math.max(1, maxQuantity), [maxQuantity]);
  const [quantity, setQuantity] = useState(1);
  const reducedMotion = useReducedMotion();
  const canDecrease = quantity > 1 && !disabled;
  const canIncrease = quantity < boundedMax && !disabled;
  const tapScale = reducedMotion ? undefined : { scale: 0.9 };

  return (
    <div
      className="inline-flex h-11 items-center gap-1 rounded-lg border border-blox-border bg-blox-control px-2 2xl:h-15 2xl:gap-3 2xl:rounded-xl 2xl:px-3"
      role="group"
      aria-label={label}
    >
      <motion.div whileTap={canDecrease ? tapScale : undefined}>
        <Button
          type="button"
          className={counterIconButtonClassName}
          onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          aria-label={`${label} minus`}
          disabled={!canDecrease}
        >
          <Minus className="size-4 text-foreground 2xl:size-6" />
        </Button>
      </motion.div>
      <span
        aria-live="polite"
        className={cn(counterChipClassName, "bg-blox-primary text-sm font-medium text-white 2xl:text-xl")}
      >
        {quantity}
      </span>
      <motion.div whileTap={canIncrease ? tapScale : undefined}>
        <Button
          type="button"
          className={counterIconButtonClassName}
          onClick={() => setQuantity((current) => Math.min(boundedMax, current + 1))}
          aria-label={`${label} plus`}
          disabled={!canIncrease}
        >
          <Plus className="size-4 text-foreground 2xl:size-6" />
        </Button>
      </motion.div>
    </div>
  );
}
