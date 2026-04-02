/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Cores vibrantes típicas do Neobrutalismo
      colors: {
        'neo-yellow': '#F4E04D',
        'neo-blue': '#8093F1',
        'neo-green': '#70D6FF',
      },
      // Sombra sólida (Hard Shadow)
      boxShadow: {
        'neo': '5px 5px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}