/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2ff',
          100: '#dce6ff',
          200: '#bad0ff',
          300: '#8db4ff',
          400: '#5a8dff',
          500: '#2f62ff',
          600: '#1a42f5',
          700: '#132fe2',
          800: '#1527b6',
          900: '#152590',
          950: '#0f1757',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
