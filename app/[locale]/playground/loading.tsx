export default function PlaygroundLoading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Subtle full-height loading bar at top */}
      <div className="h-1 w-full bg-gradient-to-r from-signal via-amber to-wave opacity-60" />

      <div className="flex items-center justify-center min-h-[90vh] flex-col gap-4">
        {/* Logo-sized pulsing orb */}
        <div className="relative">
          <div className="h-16 w-16 rounded-2xl bg-signal/20 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-signal/40" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-signal/10 animate-ping" />
        </div>
        <p className="text-sm text-ink/40 font-medium tracking-wide">Loading playground…</p>
      </div>
    </div>
  );
}
