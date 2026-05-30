import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <article className="min-h-screen bg-[radial-gradient(120%_70%_at_0%_0%,rgba(102,90,184,0.25)_0%,transparent_58%),linear-gradient(to_bottom,var(--blox-bg-top)_0%,var(--blox-bg-bottom)_100%)]">
      <header className="relative h-19.5 overflow-hidden border-b border-blox-border bg-blox-header md:h-21.5">
        <div className="mx-auto flex h-full w-full max-w-pdp-rail items-center gap-2 px-4 md:gap-2.5 md:px-6 2xl:max-w-pdp-rail-wide">
          <Skeleton className="h-9 w-9 rounded-lg bg-card/80 md:h-9 md:w-44" />
          <Skeleton className="mx-auto h-10 w-56 rounded-xl bg-card/80 md:mx-0 md:w-44" />

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <Skeleton className="h-10 w-22 rounded-xl bg-card/80" />
            <Skeleton className="h-10 w-28 rounded-xl bg-card/80" />
          </div>

          <Skeleton className="ml-auto size-11 rounded-xl bg-card/80 md:hidden" />
        </div>
      </header>

      <main className="mx-auto w-full max-w-pdp-rail px-4 py-7 md:px-6 md:py-9 2xl:max-w-pdp-rail-wide">
        <div className="mx-auto w-full max-w-pdp-hero 2xl:max-w-pdp-hero-wide">
          <div className="mb-3 flex items-center gap-2 md:hidden">
            <Skeleton className="size-8 rounded-md bg-card/80" />
            <Skeleton className="h-10 flex-1 rounded-xl bg-card/80" />
          </div>

          <div className="mb-3 hidden md:mb-4 md:block">
            <Skeleton className="h-8 w-40 rounded-lg bg-card/80 2xl:h-9 2xl:w-48" />
          </div>

          <section className="grid items-start gap-7 md:max-xl:grid md:max-xl:grid-cols-[minmax(320px,1fr)_minmax(280px,360px)] md:max-xl:gap-x-8 md:max-xl:gap-y-6 md:max-xl:items-start xl:grid-cols-[minmax(340px,360px)_minmax(340px,1fr)] xl:gap-x-8 xl:gap-y-7 2xl:grid-cols-[minmax(540px,1fr)_minmax(420px,500px)] 2xl:gap-x-12">
            <div className="contents md:max-xl:col-start-2 md:max-xl:row-start-1 md:max-xl:w-full md:max-xl:self-stretch md:max-xl:flex md:max-xl:flex-col md:max-xl:justify-between md:space-y-0 md:max-xl:gap-6 xl:col-start-2 xl:row-start-1 xl:self-stretch xl:flex xl:flex-col xl:justify-between xl:gap-8">
              <div className="contents md:max-xl:block md:max-xl:space-y-4 xl:block xl:space-y-4 2xl:space-y-5">
                <div className="order-1 space-y-2.5">
                  <Skeleton className="hidden h-6 w-40 rounded-lg bg-card/80 md:block 2xl:h-7 2xl:w-48" />
                  <Skeleton className="h-10 w-4/5 rounded-xl bg-card/80 2xl:h-12" />
                  <Skeleton className="h-10 w-3/5 rounded-xl bg-card/80 2xl:h-12" />
                </div>

                <div className="order-3 space-y-4 xl:space-y-5">
                  <Skeleton className="h-5 w-20 rounded-lg bg-card/80 2xl:h-6 2xl:w-24" />
                  <div className="flex flex-wrap items-center gap-2.5 2xl:gap-3">
                    <Skeleton className="h-12 w-44 rounded-xl bg-card/80 2xl:h-14 2xl:w-56" />
                    <Skeleton className="h-9 w-24 rounded-lg bg-card/80 2xl:h-10 2xl:w-28" />
                  </div>
                  <Skeleton className="h-5 w-48 rounded-lg bg-card/80 2xl:h-6 2xl:w-56" />
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2.5 sm:gap-3 2xl:gap-4">
                    <Skeleton className="h-11 w-24 rounded-lg bg-card/80 2xl:h-15 2xl:w-32 2xl:rounded-xl" />
                    <Skeleton className="h-11 w-full rounded-lg bg-card/80 2xl:h-15 2xl:rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="order-4">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <Skeleton className="aspect-6/5 rounded-xl bg-card/80 2xl:rounded-3xl" />
                  <Skeleton className="aspect-6/5 rounded-xl bg-card/80 2xl:rounded-3xl" />
                  <Skeleton className="aspect-6/5 rounded-xl bg-card/80 2xl:rounded-3xl" />
                </div>
              </div>
            </div>

            <div className="order-2 mx-auto mt-0.5 w-full max-w-md space-y-2.5 md:mx-0 md:max-xl:col-start-1 md:max-xl:row-start-1 md:max-xl:max-w-lg xl:max-w-sm xl:order-0 xl:col-start-1 xl:row-start-1 xl:mt-0 2xl:max-w-lg">
              <Skeleton className="aspect-square w-full rounded-2xl bg-card/80" />
              <div className="flex items-center gap-2 2xl:gap-3">
                <Skeleton className="size-11 rounded-lg bg-card/80 2xl:size-13" />
                <Skeleton className="size-11 rounded-lg bg-card/80 2xl:size-13" />
                <Skeleton className="size-11 rounded-lg bg-card/80 2xl:size-13" />
              </div>
            </div>

            <div className="order-5 md:max-xl:col-span-2 md:max-xl:row-start-2 xl:order-0 xl:col-start-2 xl:row-start-2">
              <div className="rounded-xl border border-blox-border/70 bg-card/70 2xl:rounded-2xl">
                <div className="flex items-center justify-between gap-4 border-b border-blox-border/70 px-4 py-3 2xl:py-4">
                  <Skeleton className="h-4 w-24 rounded-md bg-card/80 2xl:h-5 2xl:w-28" />
                  <Skeleton className="h-5 w-28 rounded-lg bg-card/80 2xl:h-6 2xl:w-32" />
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-blox-border/70 px-4 py-3 2xl:py-4">
                  <Skeleton className="h-4 w-20 rounded-md bg-card/80 2xl:h-5 2xl:w-24" />
                  <Skeleton className="h-5 w-24 rounded-lg bg-card/80 2xl:h-6 2xl:w-32" />
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-blox-border/70 px-4 py-3 2xl:py-4">
                  <Skeleton className="h-4 w-20 rounded-md bg-card/80 2xl:h-5 2xl:w-24" />
                  <Skeleton className="h-5 w-24 rounded-lg bg-card/80 2xl:h-6 2xl:w-28" />
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-blox-border/70 px-4 py-3 2xl:py-4">
                  <Skeleton className="h-4 w-24 rounded-md bg-card/80 2xl:h-5 2xl:w-28" />
                  <Skeleton className="h-5 w-24 rounded-lg bg-card/80 2xl:h-6 2xl:w-28" />
                </div>
                <div className="flex items-center justify-between gap-4 px-4 py-3 2xl:py-4">
                  <Skeleton className="h-4 w-24 rounded-md bg-card/80 2xl:h-5 2xl:w-28" />
                  <Skeleton className="h-5 w-24 rounded-lg bg-card/80 2xl:h-6 2xl:w-32" />
                </div>
              </div>
            </div>

            <div className="order-6 space-y-8 md:max-xl:col-span-2 md:max-xl:row-start-3 xl:order-0 xl:col-start-1 xl:row-start-2">
              <section className="space-y-3 2xl:space-y-4">
                <Skeleton className="h-8 w-56 rounded-lg bg-card/80 2xl:h-10 2xl:w-72" />
                <div className="space-y-2.5 2xl:space-y-3">
                  <Skeleton className="h-4 w-full rounded-md bg-card/80 2xl:h-5" />
                  <Skeleton className="h-4 w-[92%] rounded-md bg-card/80 2xl:h-5" />
                  <Skeleton className="h-4 w-[88%] rounded-md bg-card/80 2xl:h-5" />
                  <Skeleton className="h-4 w-[76%] rounded-md bg-card/80 2xl:h-5" />
                </div>
              </section>

              <section className="space-y-2 2xl:space-y-3">
                <Skeleton className="h-5 w-20 rounded-md bg-card/80 2xl:h-6 2xl:w-24" />
                <div className="flex flex-wrap gap-2 2xl:gap-2.5">
                  <Skeleton className="h-7 w-24 rounded-lg bg-card/80 2xl:h-8 2xl:w-32" />
                  <Skeleton className="h-7 w-28 rounded-lg bg-card/80 2xl:h-8 2xl:w-32" />
                  <Skeleton className="h-7 w-24 rounded-lg bg-card/80 2xl:h-8 2xl:w-28" />
                  <Skeleton className="h-7 w-32 rounded-lg bg-card/80 2xl:h-8 2xl:w-36" />
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </article>
  );
}
