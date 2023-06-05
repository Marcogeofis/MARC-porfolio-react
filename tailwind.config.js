/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        customGreen:"rgb(67, 196, 50)",
        customGreenDark: "rgba(67, 196, 50, 0.4)",
        azulOscuro: "#678983",
      },
      spacing: {
        "10": "10px",
        "20": "20px",
        "400": "400px",
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

