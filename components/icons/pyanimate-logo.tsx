export function PyAnimateLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        {/* Signal-to-Amber Gradient for Stem */}
        <linearGradient id="grad-stem" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6535" />
          <stop offset="1" stopColor="#fbbf24" />
        </linearGradient>

        {/* Wave-to-Leaf Gradient for Loop */}
        <linearGradient id="grad-loop" x1="20" y1="20" x2="90" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#4ade80" />
        </linearGradient>

        {/* Outer Glow filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Plate */}
      <rect x="0" y="0" width="100" height="100" rx="24" fill="#080c12" />
      <rect x="2" y="2" width="96" height="96" rx="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />

      {/* Grouping with Glow */}
      <g filter="url(#glow)">
        {/* Animated Loop (The "P" bowl) */}
        {/* x=35 to x=75 width=40. Center vertically at 45. */}
        <path
          d="M 32 30 C 85 30, 85 64, 32 64"
          stroke="url(#grad-loop)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* The Stem of the "P" */}
        <path
          d="M 32 20 L 32 80"
          stroke="url(#grad-stem)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Play Icon cutting into negative space */}
        <polygon points="43,38 56,47 43,56" fill="#080c12" />
        <polygon points="46,41 53,47 46,53" fill="#ffffff" />
      </g>
    </svg>
  );
}
