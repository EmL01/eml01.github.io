module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        default: ['Poppins']
      },
      colors: {
        brand: '#05DEC0',
        black: '#333333',
        gray: '#707070',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
