/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      rubik: ['Rubik'],
    },
    extend: {
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
