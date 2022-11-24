/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Manrope', ...defaultTheme.fontFamily.serif],
        sans: ['Freehand', ...defaultTheme.fontFamily.serif],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(auto-fill, 300px)',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: '100px, 300px',

        // Complex site-specific row configuration
        layout: '200px minmax(900px, 1fr) 100px',
      },
      gridRow: {
        small: 'span 16 / span 16',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
