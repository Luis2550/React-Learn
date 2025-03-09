/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Vietnam": ['Be Vietnam Pro', 'serif'],
      },
      colors: {
        'bright-red': 'hsl(12, 88%, 59%)',
        'dark-mode': '#454547',
      },
    },
  },
  plugins: [],
}

