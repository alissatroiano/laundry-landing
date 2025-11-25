/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
        extend: {
          fontFamily: {
            body: ['Montserrat', 'sans-serif'],
            title: ['Playfair Display', 'serif'],
            custom: ['Sofia Sans Extra Condensed', 'sans-serif'],
            tight: ['Oswald', 'sans-serif'],
          },
          colors: {
            navy: {
              50: '#f0f4f8',
              100: '#d9e2f0',
              200: '#b3c5e1',
              300: '#8da8d2',
              400: '#678bc3',
              500: '#416eb4',
              600: '#1a3a5c',
              700: '#0f1f3a',
              800: '#0a1828',
              900: '#050d14',
              950: '#030810',
            },
            indigo: {
              50: '#f0f1ff',
              100: '#e0e2ff',
              200: '#c2c5ff',
              300: '#a3a8ff',
              400: '#858bff',
              500: '#666eff',
              600: '#3d3fff',
              700: '#2d1ff4',
              800: '#1a0dca',
              900: '#0d0580',
            },
          },
        },
  },
  plugins: [],
};