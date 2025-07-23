/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        open:["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

