module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        red : {
          default: 'rgb(229, 9, 20)',
          secondary: 'rgb(193, 17, 25)',
        },
        gray : {
          default: 'rgb(115, 115, 115)',
          dark: 'rgb(24, 24, 24)',
          secondary: 'rgb(76, 73, 72)',
          white: 'rgb(250, 250, 250)',
          light: 'rgb(239, 239, 239)',
          20: 'rgba(128, 128, 128, .2)',
          40: 'rgba(128, 128, 128, .4)',
        },
        black : {
          default: 'black',
          10: 'rgba(0, 0, 0, .1)',
          30: 'rgba(0, 0, 0, .3)',
          70: 'rgba(0, 0, 0, .7)',
          90: 'rgba(0, 0, 0, .9)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
