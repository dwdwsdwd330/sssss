/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'metal': ['Metal Mania', 'cursive'],
        'creepy': ['Creepster', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-red': 'pulse-red 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      colors: {
        'dark': {
          50: '#f8f8f8',
          100: '#e5e5e5',
          200: '#d1d1d1',
          300: '#b1b1b1',
          400: '#9a9a9a',
          500: '#7e7e7e',
          600: '#626262',
          700: '#515151',
          800: '#3b3b3b',
          900: '#2a2a2a',
          950: '#1a1a1a',
        }
      },
      boxShadow: {
        'red': '0 0 20px rgba(239, 68, 68, 0.3)',
        'red-lg': '0 0 40px rgba(239, 68, 68, 0.4)',
      }
    },
  },
  plugins: [],
};
