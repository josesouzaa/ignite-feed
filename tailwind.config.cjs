/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#fff',
          'gray-100': '#e1e1e6',
          'gray-300': '#c4c4cc',
          'gray-400': '#8d8d99',
          'gray-600': '#323238',
          'gray-700': '#29292e',
          'gray-800': '#202024',
          'gray-900': '#121214',
          'green-500': '#00875f'
        }
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
