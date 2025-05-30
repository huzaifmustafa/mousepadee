/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#121826',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          950: '#0F1420',
        },
        teal: {
          400: '#4FD1C5',
          500: '#38B2AC',
          600: '#319795',
        },
        purple: {
          400: '#9F7AEA',
          500: '#805AD5',
          600: '#6B46C1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};