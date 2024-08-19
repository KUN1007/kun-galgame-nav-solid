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
            light: '#eaf8ff',
          },
          blue5: {
            dark: '#00152e',
            light: '#0969da',
          },
          red: '#cf222e',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
