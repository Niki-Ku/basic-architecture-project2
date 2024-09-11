module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        gray: 'rgb(var(--color-gray))',
        darkGray: 'rgb(var(--color-dark-gray))',
        red: 'rgb(var(--color-red))',
        graySecondary: 'rgb(var(--color-gray-secondary))',
        // transparentGray: 'rgba(var(--color-transparent-gray))',
        transparentGray: '#80808033',
        transparentGray4: 'rgba(128, 128, 128, .4)',
        transparentBlack7: 'rgba(0, 0, 0, .7)',
        transparentBlack9: 'rgba(0, 0, 0, .9)',
        // refactor colors here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
