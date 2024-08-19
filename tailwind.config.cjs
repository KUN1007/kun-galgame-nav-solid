/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kun: {
          blue0: {
            dark: '#00152e',
            light: '#eaf8ff'
          },
          blue5: {
            dark: '#80ccff',
            light: '#0969da'
          },
          font: {
            dark: '#dddddd',
            light: '#242424'
          },
          bg: {
            light: '#FFFFFF',
            dark: '#002155'
          },
          red: '#cf222e'
        }
      }
    }
  },
  plugins: []
}
