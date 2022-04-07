module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}