/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          muted: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Monaco', 'monospace'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              fontWeight: '600',
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            h1: { fontFamily: theme('fontFamily.serif') },
            h2: { fontFamily: theme('fontFamily.serif') },
            code: {
              backgroundColor: theme('colors.slate.100'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: { color: theme('colors.primary.400') },
            code: {
              backgroundColor: theme('colors.slate.800'),
              color: theme('colors.slate.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
};
