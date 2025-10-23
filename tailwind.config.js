/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'otacos-blue': '#1a3a5a', // Bleu foncé professionnel
        'otacos-accent': '#a3e635', // Vert lime/jaune vif
      },
    },
  },
  plugins: [],
}
