module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          default: 'rgb(var(--color-red))',
          secondary: 'rgb(var(--color-red-secondary))',
        },
        gray: {
          default: 'rgb(var(--color-gray))',
          dark: 'rgb(var(--color-gray-dark))',
          light: 'rgb(var(--color-gray-light))',
          secondary: 'rgb(var(--color-gray-secondary))',
          white: 'rgb(var(--color-gray-white))',
          20: 'rgba(var(--color-gray-20), 0.2)',
          40: 'rgba(var(--color-gray-40), 0.4)',
        },
        black: {
          default: 'rgb(var(--color-black))',
          10: 'rgba(var(--color-black), 0.1)',
          30: 'rgba(var(--color-black), 0.3)',
          70: 'rgba(var(--color-black), 0.7)',
          90: 'rgba(var(--color-black), 0.9)',
        },
        toggle: {
          bg: 'rgb(var(--toggle-bg))',
          border: 'rgb(var(--toggle-border))',
          active: 'rgb(var(--toggle-active))',
          hover: 'rgb(var(--toggle-hover))',
          text: 'rgb(var(--toggle-text))',
        },
      },
      text: {
        default: 'rgb(var(--text-default))',
        secondary: 'rgb(var(--text-secondary))',
        highlight: 'rgb(var(--text-highlight))',
        hover: 'rgb(var(--text-hover))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
