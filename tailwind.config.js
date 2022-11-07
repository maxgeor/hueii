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
      white: '#E2E2F9',
      purple: {
        900: '#101448',
        800: '#17195a',
      },
    },
    extend: {
      colors: {
        gray: {
          900: '#19192f',
          800: '#20203b',
          500: '#787892',
        },
      },
      fontFamily: {
        maru: 'GT-Maru, serif'
      }
    },
  },
  plugins: [],
}