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
              <Card className="h-full rounded-xl border border-border/70 bg-card/70 px-2 py-2 text-center transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:border-border sm:px-2.5 sm:py-2.5">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="grid size-6 place-items-center rounded-lg bg-muted text-primary sm:size-6.5">
                    <Icon className="size-3.5 sm:size-4" aria-hidden="true" />
                  </span>
                  <span className="text-[0.72rem] leading-tight font-medium text-foreground sm:text-xs">
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
