"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type GameOption = {
  slug: string;
  name: string;
  thumbnail: string;
};

const GAMES: GameOption[] = [
  {
    slug: "murder-mystery-2",
    name: "Murder Mystery 2",
    thumbnail: "/games/mm2.avif",
  },
  {
    slug: "grow-a-garden",
    name: "Grow A Garden",
    thumbnail: "/games/gag.avif",
  },
  {
    slug: "steal-a-brainrot",
    name: "Steal A Brainrot",
    thumbnail: "/games/sab.avif",
  },
  {
    slug: "grand-piece-online",
    name: "Grand Piece Online",
    thumbnail: "/games/gpo.avif",
  },
  {
    slug: "escape-tsunami-for-brainrots",
    name: "Escape Tsunami For Brainrots",
    thumbnail: "/games/ets.avif",
  },
  {
    slug: "sailor-piece",
    name: "Sailor Piece",
    thumbnail: "/games/sp.avif",
  },
  {
    slug: "adopt-me",
    name: "Adopt Me",
    thumbnail: "/games/am.avif",
  },
  {
    slug: "pet-simulator-99",
    name: "Pet Simulator 99",
    thumbnail: "/games/ps99.avif",
  },
  {
    slug: "blade-ball",
    name: "Blade Ball",
    thumbnail: "/games/bb.avif",
  },
  {
    slug: "blox-fruits",
    name: "Blox Fruits",
    thumbnail: "/games/bf.avif",
  },
  {
    slug: "99-nights-in-the-forest",
    name: "99 Nights In The Forest",
    thumbnail: "/games/99nitf.avif",
  },
  {
    slug: "dress-to-impress",
    name: "Dress To Impress",
    thumbnail: "/games/dti.avif",
  },
  {
    slug: "garden-tower-defense",
    name: "Garden Tower Defense",
    thumbnail: "/games/gtd.avif",
  },
];

type GameSelectorProps = {
  className?: string;
};

function GameIcon({
  game,
  iconClassName,
}: {
  game: GameOption;
  iconClassName?: string;
}) {
  return (
    <Image
      src={game.thumbnail}
      alt=""
      width={26}
      height={26}
      className={cn("size-6 rounded-md object-cover 2xl:size-6.5", iconClassName)}
      aria-hidden="true"
    />
  );
}

export function GameSelector({ className }: GameSelectorProps) {
  const [selectedSlug, setSelectedSlug] = useState("blox-fruits");
  const selectedGame = useMemo(
    () => GAMES.find((game) => game.slug === selectedSlug) ?? GAMES[0],
    [selectedSlug]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className={cn(
            "h-10 w-55 shrink-0 justify-between rounded-lg border-blox-border bg-blox-control px-2 text-left text-sm hover:bg-blox-control-hover md:w-45 2xl:h-11 2xl:w-52",
            className
          )}
          aria-label={`Game selector, selected ${selectedGame.name}`}
        >
          <span className="flex min-w-0 items-center gap-2">
            <GameIcon game={selectedGame} />
            <span className="truncate text-sm font-medium">{selectedGame.name}</span>
          </span>
          <span
            className="grid size-6 shrink-0 place-items-center rounded-md bg-blox-control-accent/10 text-muted-foreground 2xl:size-6.5"
            aria-hidden="true"
          >
            <ChevronDown className="size-3.5 2xl:size-4" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={8}
        className="max-h-72 w-[--radix-dropdown-menu-trigger-width] overflow-y-auto rounded-lg border border-blox-border bg-blox-surface p-1.5"
      >
        {GAMES.map((game) => (
          <DropdownMenuItem
            key={game.slug}
            onSelect={() => setSelectedSlug(game.slug)}
            className={cn(
              "gap-2 rounded-lg px-2 py-2 text-sm focus:bg-primary/14 focus:text-foreground",
              selectedSlug === game.slug && "bg-primary/14"
            )}
          >
            <GameIcon game={game} iconClassName="size-6 rounded-md" />
            <span className="min-w-0 flex-1 truncate">{game.name}</span>
            <Check
              className={cn(
                "size-3.5 text-primary opacity-0",
                selectedSlug === game.slug && "opacity-100"
              )}
              aria-hidden="true"
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
