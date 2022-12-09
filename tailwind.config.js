/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      black: '#18181C',
      white: '#B9BAD1',
      purple: {
        900: '#101448',
        800: '#17195a',
      },
    },
    extend: {
      screens: {
        xl: '1211px',
        '8xl': '1920px',
      },
      colors: {
        gray: {
          900: '#1B1B25',
          800: '#26262E',
          700: '#2F2F47',
          600: '#444461',
          500: '#80808d',
          300: '#9798a8',
          200: '#a6a7bd',
          100: '#B9BAD1'
        },
      },
      fontFamily: {
        maru: 'GT-Maru, serif',
        dm: 'DM Mono monospace'
      },
      padding: {
        4.5: '1.125rem',
      },
      margin: {
        4.5: '1.125rem',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner-lg': 'inset 0 10px 15px -3px rgb(0 0 0 / 0.1), inset 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      },
      letterSpacing: {
        'wideish': '.01em',
      },
      maxWidth: {
        '6xl': '68rem',
      }
    },
  },
  plugins: [],
}