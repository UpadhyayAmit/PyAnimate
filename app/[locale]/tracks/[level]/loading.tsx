export default function TrackLoading() {
  return (
    <div className="min-h-screen pb-20 animate-pulse">
      {/* Header skeleton */}
      <div className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-16">
        <div className="h-14 rounded-full bg-[var(--panel)] border border-[var(--border)]" />
      </div>

      {/* Hero card skeleton */}
      <div className="px-4 pt-8 pb-6 sm:px-6 md:px-10 lg:px-16">
        <div className="site-shell">
          <div className="h-4 w-24 rounded-full bg-[var(--timeline-hover)] mb-6" />
          <div className="card-elevated rounded-[32px] p-8 space-y-4">
            <div className="h-3 w-20 rounded-full bg-[var(--timeline-hover)]" />
            <div className="h-8 w-64 rounded-lg bg-[var(--timeline-hover)]" />
            <div className="h-4 w-full max-w-md rounded-full bg-[var(--timeline-hover)]" />
            <div className="flex gap-3 pt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-20 rounded-full bg-[var(--timeline-hover)]" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="px-4 pb-10 sm:px-6 md:px-10 lg:px-16">
        <div className="site-shell grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card-elevated rounded-[24px] p-5 h-52" />
          ))}
        </div>
      </div>
    </div>
  );
}
