module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txtShowcase': '#9c0606',
        "infoButton":"#6366f1",
        "lighterYellow":"#f7cb6b",
        "darkerYellow":"#fba980"
      },
      minHeight: {
        'footer': '18rem',
        "header": "60px",
        'mainbody': '200vh'
      },
      height: {
        'footer': '18rem',
        "header": "60px",
        'mainbody': '200vh'
      },
      fontFamily: {
        'Plex': ["IMB Plex Sans", "sans-serif"],
        'OSans': ["Open Sans", "sans-serif"],
        'NSans': ["Noto Sans", "sans-serif"],
        'PSans': ["Product Sans", "sans-serif"],
      },
      backgroundImage: {
        'lgimageShowcase': "url('/combo-bigbanner.png')",
        'mdimageShowcase': "url('/combo-mdbanner.png')",
        'menuImage': "url('/269.jpg')"
      },
      screens: {
        'lg': { "min": '740px', "max": "900px" },
        'xl': { "min": '901px' }
      },
      boxShadow: {
        'price': '2px 2px 3px rgb(60,60,60,.4), -2px -1px 3px rgb(60,60,60,.4)',
      }
    },
  },
  plugins: [],
}