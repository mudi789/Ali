/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        romance: {
          50: '#fff1f5',
          100: '#ffe0ea',
          200: '#ffc2d6',
          300: '#ff94b8',
          400: '#ff5c96',
          500: '#f9316f',
          600: '#e51255',
          700: '#c10a45',
          800: '#a10c3f',
          900: '#880e3a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
