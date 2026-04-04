import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        bright: 'rgb(var(--color-bright) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        parchment: 'rgb(var(--color-parchment) / <alpha-value>)',
        mist: 'rgb(var(--color-mist) / <alpha-value>)',
        signal: '#ff6535',
        amber: '#fbbf24',
        wave: '#38bdf8',
        leaf: '#4ade80',
        gold: '#fcd34d',
        neon: '#a78bfa',
        rose: '#fb7185',
      },
      boxShadow: {
        panel: '0 24px 60px rgba(8, 17, 31, 0.12)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(8, 17, 31, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 17, 31, 0.05) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
