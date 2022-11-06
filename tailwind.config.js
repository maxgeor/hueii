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
      // black: '#0a0a35',
      // white: '#F1F1FF',
      // gray: {
      //   900: '#101448',
      //   800: '#17195a',
      //   500: '#787892',
      // },
    },
    extend: {
      fontFamily: {
        maru: 'GT-Maru, serif'
      }
    },
  },
  plugins: [],
}