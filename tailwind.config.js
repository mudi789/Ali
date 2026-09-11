/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          50: '#f6f2ff',
          100: '#ede4ff',
          200: '#d9c9ff',
          300: '#bd9dff',
          400: '#a06bff',
          500: '#8b3dff',
          600: '#7c1fff',
          700: '#6a12e8',
          800: '#5810bc',
          900: '#480f96',
          950: '#2c0763',
        },
        ink: {
          900: '#050107',
          800: '#0a040f',
          700: '#120819',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-24px,0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-40px,0) scale(1.06)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.08)' },
        },
        'fade-up': {
          from: { opacity: 0, transform: 'translateY(28px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        shimmer: 'shimmer 6s linear infinite',
        twinkle: 'twinkle 3.5s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2.2s ease-in-out infinite',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(139, 61, 255, 0.55)',
        'glow-lg': '0 0 120px -20px rgba(139, 61, 255, 0.65)',
      },
      backgroundImage: {
        'nova-gradient': 'linear-gradient(120deg, #d9c9ff, #8b3dff 45%, #ffffff 80%)',
      },
    },
  },
  plugins: [],
}
