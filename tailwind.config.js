/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html",
    "./public/privacy.html",
    "./public/terms&conditions.html",
    "./public/login.html",
    "./public/register.html",
    "./public/contact.html",
    "./public/about.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [],
}
