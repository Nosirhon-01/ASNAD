/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102A43',
          deep: '#0B1F33',
        },
        ivory: '#F7F6F2',
        mist: '#EEF1F4',
        steel: '#64748B',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        site: '88rem',
      },
    },
  },
  plugins: [],
}
