module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        gray: 'rgb(115, 115, 115)',
        darkGray: 'rgb(24, 24, 24)',
        red: 'rgb(229, 9, 20)',
        graySecondary: 'rgb(76, 73, 72)',
        transparentGray: '#80808033',
        transparentGray4: 'rgba(128, 128, 128, .4)',
        transparentGray2: 'rgba(128, 128, 128, .2)',
        transparentBlack1: 'rgba(0, 0, 0, .1)',
        transparentBlack7: 'rgba(0, 0, 0, .7)',
        transparentBlack9: 'rgba(0, 0, 0, .9)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
