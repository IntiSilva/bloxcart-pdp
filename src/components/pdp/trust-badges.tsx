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
      <ul className="grid gap-3 sm:grid-cols-3">
        {badges.map((badge, index) => {
          const Icon = TRUST_ICONS[index % TRUST_ICONS.length];

          return (
            <li key={`${badge}-${index}`}>
              <Card className="h-full rounded-2xl border border-border/70 bg-card/70 px-4 py-3 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:border-border">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-muted text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{badge}</span>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
