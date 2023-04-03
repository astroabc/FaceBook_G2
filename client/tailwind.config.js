/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xl': { 'max': '1440px' },
      // => @media (max-width: 1440px) { ... }

      'lg': { 'max': '1280px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '1024px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '860px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
