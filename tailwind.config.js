module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // container: {
    //   center: true
    // },
    // colors: {
    //   discordbg: '#36393E'
    // },
    extend: {
      colors:
      {
        'discordbg': '#36393E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
