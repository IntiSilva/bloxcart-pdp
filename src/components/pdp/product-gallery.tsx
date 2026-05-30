"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/lib/product/product-data";
import { Sparkle } from "lucide-react";
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
      <Card className="rounded-xl border-0 bg-card/70 p-5">
        <p className="text-sm text-muted-foreground">{sectionLabel}</p>
      </Card>
    );
  }

  return (
    <section aria-label={sectionLabel} className={cn("w-full space-y-2.5 sm:space-y-3", className)}>
      <Card className="relative overflow-hidden rounded-2xl border-0 p-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-blox-gallery-orange to-transparent opacity-30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/assets/dots-orange.svg')] bg-cover bg-top opacity-75"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_95%,rgba(27,24,39,0.58),transparent_62%)]"
        />
        <div className="relative z-10 border-0 aspect-square p-2.5 sm:p-3">
          <Badge className="absolute top-2.5 left-2.5 z-20 h-7 gap-1.5 px-1.5 rounded-lg bg-blox-gallery-orange text-xs font-semibold text-white 2xl:h-8 2xl:px-2 2xl:text-sm">
            <span className="grid size-4 place-items-center rounded-sm bg-white/20 2xl:size-4.5">
              <Sparkle className="size-2.5 fill-white text-white 2xl:size-3" aria-hidden="true" />
            </span>
            {secretLabel}
          </Badge>
          <Image
            src={selectedImage.url}
            alt={selectedImage.alt}
            width={720}
            height={720}
            priority
            className="mx-auto h-full w-full rounded-xl object-contain p-5 sm:p-6 2xl:p-4"
          />
        </div>
      </Card>

      <div aria-label={thumbnailsLabel} className="flex items-center gap-2 2xl:gap-3">
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
                  "size-11 rounded-lg border border-border/80 bg-card/70 p-0 transition-colors 2xl:size-13",
                  isActive &&
                    "border-primary bg-primary/20 ring-1 ring-primary/60 ring-offset-1 ring-offset-background"
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
