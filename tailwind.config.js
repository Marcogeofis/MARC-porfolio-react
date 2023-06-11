/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation:{
        appear: 'trans_appear 1800ms ease-in-out forwards',
        left_center: 'move1 1800ms ease-in-out forwards'
      },
      keyframes:{
        trans_appear: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
        move1:{
          "0%":{
            opacity: 0,
            transform: "translateX(-150px)",
          },
          "100%":{
            opacity: 1,
            transform: "translateX(0px)",
          },
        }
      },
      colors:{
        customGreen:"rgb(67, 196, 50)",
        customGreenDark: "rgba(67, 196, 50, 0.4)",
        azulOscuro: "#678983",
      },
      spacing: {
        "10": "10px",
        "20": "20px",
        "400": "400px",
        "500": "500px"
      },
      fontFamily:{
        'dosis': ['Dosis']
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

