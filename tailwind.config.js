module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "default":"#dbdfe6",
        "order-tutorial": "#e3af49",
        "order-cta": "#c92443",
        'txtShowcase': '#9c0606',
        "infoButton": "#6366f1",
        "lighterYellow": "#f7cb6b",
        "darkerYellow": "#fba990"
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
        'menuImage': "url('/269.jpg')",
        "tutorialCard": "url('/wave.svg')"
      },
      screens: {
        'lg': { "min": '740px', "max": "900px" },
        'xl': { "min": '901px' }
      },
      boxShadow: {
        'price': '2px 2px 3px rgb(60,60,60,.4), -2px -1px 3px rgb(60,60,60,.4)',
        'tutorial-card': 'rgba(200,100,100, 0.3) 0px 1px 2px 0px, rgba(200,100,100, 0.15) 0px 1px 3px 1px',
        "food-card": "1.3px 2.5px 3px rgb(60,60,60,.38), -1.2px -1.4px 3px rgb(60,60,60, .38)",
        "order-cta": "3px 3px 6px rgb(222,16,177,.5), -3px 3px 6px rgb(36,58,201,.8)",
        "login":"1px 1px 2px rgb(60,60,60,.4)"
      }
    },
  },
  plugins: [],
}