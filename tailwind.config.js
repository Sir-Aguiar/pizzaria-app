module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txtShowcase': '#9c0606'
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
        'imageShowcase': "url('/xbacon-banner.png')",
        'menuImage':"url('/269.jpg')"
      },
      screens: {
        'lg': { min: '740px' },
      }
    },
  },
  plugins: [],
}