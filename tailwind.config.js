/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e',
        secondary: '#455a64',
        accent: '#00bcd4'
      }
    },
  },
  plugins: [],
}