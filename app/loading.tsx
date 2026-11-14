export default function Loading() {
  return (
    <div className="bg-cloud">
      {/* No header skeleton. The real Header renders from app/layout.tsx and
          stays on screen while a route loads (since 2026-11-14), so a skeleton
          bar here would show as a second header. */}

      {/* Main Content Skeleton */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="h-12 w-3/4 animate-pulse rounded bg-teal/20" />
            <div className="h-12 w-1/2 animate-pulse rounded bg-teal/20" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-teal/10" />
              <div className="h-4 w-full animate-pulse rounded bg-teal/10" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-teal/10" />
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-40 animate-pulse rounded-lg bg-teal/30" />
              <div className="h-12 w-32 animate-pulse rounded-lg bg-teal/20" />
            </div>
          </div>
          <div className="aspect-square w-full animate-pulse rounded-xl bg-teal/10 lg:aspect-[4/3]" />
        </div>

        {/* Section Skeletons */}
        <div className="mt-24 flex flex-col items-center gap-4">
          <div className="h-8 w-48 animate-pulse rounded bg-teal/20" />
          <div className="h-4 w-96 max-w-full animate-pulse rounded bg-teal/10" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-32 animate-pulse rounded-xl border border-line bg-card/50" />
          ))}
        </div>
      </main>
    </div>
  );
}
