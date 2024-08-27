module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        gray: 'rgb(var(--color-gray))',
        darkGray: 'rgb(var(--color-dark-gray))',
        red: 'rgb(var(--color-red))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
