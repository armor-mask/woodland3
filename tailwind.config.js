/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'resort': {
          'white': '#FEFEFE',
          'gray': '#A2A2A1',
          'gold': '#B1A06E',
          'cream': '#E1CFB1',
          'forest': '#364826'
        }
      }
    },
  },
  plugins: [],
};
