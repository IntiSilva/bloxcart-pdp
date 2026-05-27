import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[radial-gradient(120%_70%_at_0%_0%,rgba(102,90,184,0.25)_0%,transparent_58%),linear-gradient(to_bottom,var(--blox-bg-top)_0%,var(--blox-bg-bottom)_100%)]">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-7 md:px-6 md:py-9">
        <div className="mx-auto w-full max-w-[746px] space-y-4">
          <Skeleton className="h-7 w-32 rounded-lg bg-card/80" />

          <div className="grid gap-4 lg:grid-cols-[360px_354px] lg:gap-8">
            <div className="order-1 space-y-3 lg:col-start-2">
              <Skeleton className="h-8 w-28 rounded-xl bg-card/80" />
              <Skeleton className="h-24 w-full rounded-2xl bg-card/80" />
            </div>

            <div className="order-2 space-y-3 lg:col-start-1 lg:row-span-2">
              <Skeleton className="aspect-square w-full rounded-[24px] bg-card/80" />
              <div className="flex gap-2">
                <Skeleton className="size-11 rounded-xl bg-card/80" />
                <Skeleton className="size-11 rounded-xl bg-card/80" />
                <Skeleton className="size-11 rounded-xl bg-card/80" />
              </div>
            </div>

            <div className="order-3 space-y-4 lg:col-start-2">
              <Skeleton className="h-6 w-20 rounded-lg bg-card/80" />
              <Skeleton className="h-14 w-52 rounded-xl bg-card/80" />
              <Skeleton className="h-5 w-36 rounded-lg bg-card/80" />
              <Skeleton className="h-11 w-full rounded-xl bg-card/80" />
              <div className="grid gap-3 sm:grid-cols-3">
                <Skeleton className="h-20 rounded-2xl bg-card/80" />
                <Skeleton className="h-20 rounded-2xl bg-card/80" />
                <Skeleton className="h-20 rounded-2xl bg-card/80" />
              </div>
              <Skeleton className="h-64 w-full rounded-2xl bg-card/80" />
            </div>
          </div>

          <Skeleton className="h-48 w-full rounded-2xl bg-card/80" />
          <Skeleton className="h-24 w-full rounded-2xl bg-card/80" />
        </div>
      </div>
    </main>
  );
}
