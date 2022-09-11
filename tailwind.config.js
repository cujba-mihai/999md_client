/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: {},
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '0.9375rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      borderWidth: {
        1: '1px'
      },
      width: {
        140: '140px'
      },
      gridTemplateColumns: {
        'layout': 'minmax(10px, 20%) auto minmax(10px, 20%)',
        'header-menu': 'repeat(32, 1fr)',
        'index-main': '260px 473px 240px',
        'product-cards': 'repeat(auto-fit, 140px)'
      },
      gridTemplateRows: {
        'index-advertising': 'repeat(2, 240px)',
        'product-cards': 'repeat(auto-fit, 200px)'
      },
      width: {
        'search-input': "clamp(320px, 100%, 560px);",
      },

      screens: {
        'hover-hover': { 'raw': '(hover: hover)' },
      },
      backgroundColor: {
        'head': '#f0f1f4',
      },
      colors: {
        green: {
          500: '#73b222'
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          'text': '#005cc3',
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  plugins: [],
};
