export default function Loading() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 animate-pulse rounded bg-primary/20" />
            <div className="hidden h-5 w-48 animate-pulse rounded bg-primary/20 sm:block" />
          </div>
          <div className="hidden gap-8 md:flex">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 w-16 animate-pulse rounded bg-primary/20" />
            ))}
          </div>
          <div className="h-10 w-24 animate-pulse rounded-lg bg-primary/20" />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="h-12 w-3/4 animate-pulse rounded bg-primary/20" />
            <div className="h-12 w-1/2 animate-pulse rounded bg-primary/20" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
              <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-primary/10" />
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-40 animate-pulse rounded-lg bg-primary/30" />
              <div className="h-12 w-32 animate-pulse rounded-lg bg-primary/20" />
            </div>
          </div>
          <div className="aspect-square w-full animate-pulse rounded-xl bg-primary/10 lg:aspect-[4/3]" />
        </div>

        {/* Section Skeletons */}
        <div className="mt-24 flex flex-col items-center gap-4">
          <div className="h-8 w-48 animate-pulse rounded bg-primary/20" />
          <div className="h-4 w-96 max-w-full animate-pulse rounded bg-primary/10" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-32 animate-pulse rounded-xl border border-border-light dark:border-border-dark bg-card-light/50 dark:bg-card-dark/50" />
          ))}
        </div>
      </main>
    </div>
  );
}
