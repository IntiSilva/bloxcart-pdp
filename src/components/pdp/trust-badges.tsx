import { Card } from "@/components/ui/card";
import { Clock3, Headphones, ShieldCheck } from "lucide-react";

type TrustBadgesProps = {
  badges: string[];
  sectionLabel: string;
};

const TRUST_ICONS = [Clock3, Headphones, ShieldCheck] as const;

export function TrustBadges({ badges, sectionLabel }: TrustBadgesProps) {
  return (
    <section aria-label={sectionLabel}>
      <ul className="grid grid-cols-3 gap-2 sm:gap-3">
        {badges.map((badge, index) => {
          const Icon = TRUST_ICONS[index % TRUST_ICONS.length];

          return (
            <li key={`${badge}-${index}`}>
              <Card className="w-full aspect-6/5 rounded-xl border border-border/70 bg-card/70 px-2 py-2.5 text-center transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:border-border sm:px-2.5 sm:py-3 2xl:rounded-3xl">
                <div className="flex h-full flex-col items-center justify-center gap-2 sm:gap-2.5">
                  <span className="grid size-6 place-items-center rounded-lg bg-blox-control-accent/20 text-white sm:size-7 2xl:size-10 2xl:rounded-xl">
                    <Icon className="size-3.5 text-white sm:size-4.5 2xl:size-6" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium text-foreground lg:text-sm 2xl:text-lg">
                    {badge}
                  </span>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
