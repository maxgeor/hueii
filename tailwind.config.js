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
      black: '#0C0C21',
      white: '#d9d9f0',
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
          500: '#797991',
          100: '#c4c5dc'
        },
      },
      fontFamily: {
        maru: 'GT-Maru, serif',
        dm: 'DM Mono monospace'
      }
    },
  },
  plugins: [],
}