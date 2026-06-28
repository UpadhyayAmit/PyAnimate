export const clerkAppearance = {
  variables: {
    colorPrimary: '#ff6535',
    colorBackground: '#1b1c22',
    colorInputBackground: '#24252b',
    colorInputText: '#f8fafc',
    colorText: '#f8fafc',
    colorTextSecondary: 'rgba(248,250,252,0.62)',
    borderRadius: '14px',
    fontFamily: 'var(--font-sans), sans-serif',
  },
  elements: {
    logoImage: 'h-12 w-12 rounded-2xl',
    cardBox: 'shadow-[0_24px_80px_rgba(0,0,0,0.45)]',
    card: 'border border-white/10',
    headerTitle: 'text-white',
    headerSubtitle: 'text-white/60',
    socialButtonsBlockButton: 'border-white/10 bg-white/5 text-white/75 hover:bg-white/10',
    formButtonPrimary: 'bg-signal hover:bg-signal/90 text-white',
    footerActionLink: 'text-signal hover:text-signal',
  },
} as const;
