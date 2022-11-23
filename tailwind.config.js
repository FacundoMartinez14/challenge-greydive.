/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "black": "#363636",
      'gray-lighter': 'rgb(209 213 219)',
      "white": "#f5f5f5",
      "DarkSlateBlue": "#292643",
      "gray": "rgb(107 114 128)",
      "DarkerSlateBlue": "#41416d",
      "orange": "#f6905c"
    },
    minWidth: {
      '9/12': '75%',
      "1/3": "33%"
    },
    minHeight: {
      '1/2': '50%',
    }
  },
  plugins: [],
}
