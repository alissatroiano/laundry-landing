/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
        extend: {
          fontFamily: {
            body: ['Montserrat', 'sans-serif'],
            title: ['Playfair Display', 'serif'],
            custom: ['Sofia Sans Extra Condensed', 'sans-serif'],
            tight: ['Oswald', 'sans-serif'],
          },
        },
  },
  plugins: [],
};