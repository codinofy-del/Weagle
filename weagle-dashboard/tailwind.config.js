/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
      },
      text: { base: { primary: 'var(--color-text-base-primary)', secondary: 'var(--color-text-base-secondary)', tertiary: 'var(--color-text-base-tertiary)' } },
      background: { surface: { default: 'var(--color-background-surface-default)' }, app: 'var(--color-background-app)' },
      border: { base: { divider: 'var(--color-border-base-divider)' } },
      status: { success: 'var(--color-status-success)', warning: 'var(--color-status-warning)', error: 'var(--color-status-error)' },
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: { sans: ['var(--font-family-base)'] },
    fontSize: {
      h1: ['24px', { lineHeight: '28px', fontWeight: '600' }],
      h2: ['20px', { lineHeight: '24px', fontWeight: '600' }],
      h3: ['16px', { lineHeight: '22px', fontWeight: '600' }],
      b1: ['14px', { lineHeight: '150%', fontWeight: '400' }],
      b2: ['13px', { lineHeight: '130%', fontWeight: '400' }],
    },
    spacing: { 0: 'var(--space-0)', 4: 'var(--space-4)', 8: 'var(--space-8)', 12: 'var(--space-12)', 16: 'var(--space-16)', 24: 'var(--space-24)', 32: 'var(--space-32)', 80: 'var(--space-80)' },
    boxShadow: { 'soft-tic': 'var(--shadow-soft-tic)' },
    borderRadius: { card: 'var(--radius-card)', control: 'var(--radius-control)', pill: 'var(--radius-pill)' },
  },
  plugins: [],
}
