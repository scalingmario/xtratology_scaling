/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003561',
        accent: '#38B6FF',
        warning: '#FFC545',
        surface: '#f5f7fa',
        borderline: '#e5eaf0',
        textmuted: '#5a6b7d',
        principle: {
          team: '#7C2D4D',
          business: '#1A3A52',
          execution: '#1C1C1E',
          cash: '#1D5C4A',
          innovation: '#A67C00'
        }
      }
    },
  },
  plugins: [],
}