/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a',
          blue: '#1d4ed8',
          light: '#f8fafc'
        }
      }
    },
  },
  plugins: [],
}
