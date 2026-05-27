"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/lib/product/product-data";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";

type ProductGalleryProps = {
  images: ProductImage[];
  secretLabel: string;
  sectionLabel: string;
  thumbnailsLabel: string;
  className?: string;
};

export function ProductGallery({
  images,
  secretLabel,
  sectionLabel,
  thumbnailsLabel,
  className,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const safeSelectedIndex = Math.min(selectedIndex, images.length - 1);
  const selectedImage = useMemo(() => images[safeSelectedIndex], [images, safeSelectedIndex]);

  if (!selectedImage) {
    return (
      <Card className="rounded-2xl border border-border/70 bg-card/70 p-5">
        <p className="text-sm text-muted-foreground">{sectionLabel}</p>
      </Card>
    );
  }

  return (
    <section aria-label={sectionLabel} className={cn("w-full space-y-3", className)}>
      <Card className="relative overflow-hidden rounded-[24px] border border-border/70 bg-[var(--blox-surface-soft)] p-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,95,109,0.26),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(145,83,255,0.24),transparent_56%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-45 [background-image:radial-gradient(circle,rgba(255,121,121,0.52)_2.2px,transparent_2.2px)] [background-size:19px_19px]"
        />
        <div className="relative aspect-square p-3 sm:p-4">
          <Badge className="absolute top-3 left-3 z-10 h-7 rounded-lg bg-[var(--blox-sale)] px-2.5 text-xs font-semibold text-white">
            {secretLabel}
          </Badge>
          <Image
            src={selectedImage.url}
            alt={selectedImage.alt}
            width={720}
            height={720}
            priority
            className="mx-auto h-full w-full rounded-xl object-contain p-7 sm:p-8"
          />
        </div>
      </Card>

      <div aria-label={thumbnailsLabel} className="flex items-center gap-2">
        {images.map((image, index) => {
          const isActive = index === safeSelectedIndex;
          const canAnimate = !reducedMotion;

          return (
            <motion.div
              key={`${image.url}-${index}`}
              animate={{
                opacity: isActive ? 1 : 0.52,
                scale: isActive ? 1 : 0.96,
              }}
              whileHover={canAnimate ? { scale: isActive ? 1.03 : 1 } : undefined}
              whileTap={canAnimate ? { scale: 0.94 } : undefined}
              transition={{ duration: 0.16, ease: "easeOut" }}
            >
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                onClick={() => setSelectedIndex(index)}
                aria-label={`${thumbnailsLabel} ${index + 1}`}
                aria-pressed={isActive}
                className={cn(
                  "size-11 rounded-xl border border-border/80 bg-card/60 p-0 transition-colors",
                  isActive &&
                    "border-primary bg-primary/20 ring-2 ring-primary/50 ring-offset-2 ring-offset-background"
                )}
              >
                <Image
                  src={image.url}
                  alt=""
                  aria-hidden="true"
                  width={88}
                  height={88}
                  className="h-full w-full rounded-lg object-cover"
                />
              </Button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
