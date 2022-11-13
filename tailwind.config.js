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
      white: '#E9E9F7',
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
          900: '#19192f',
          850: '#191930',
          800: '#20203b',
          750: '#25253e',
          700: '#363653',
          600: '#444461',
          500: '#7e7e9b',
          100: '#c4c5dc'
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
      }
    },
  },
  plugins: [],
}