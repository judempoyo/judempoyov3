/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'dark-sm': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'dark-md': '0 4px 24px rgba(0, 0, 0, 0.5)',
        'dark-lg': '0 6px 28px rgba(0, 0, 0, 0.6)',
        'dark-xl': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'green-glow': '0 8px 32px rgba(0, 255, 120, 0.08)',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-pattern': '18px 18px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '97': '0.97',
        '96': '0.96',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.3em',
        'widest-3xl': '0.4em',
      },
      lineHeight: {
        'compact': '0.95',
      },
      opacity: {
        '2': '0.02',
        '4': '0.04',
      },
    },
  },
  plugins: [],
}

