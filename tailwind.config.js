/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        imgbg:"url('/public/Images/mgbackground.jpg')",
        'imgbg-dark':"url('/public/Images/mgbackgrounddark.jpg')",
      }
    },
  },
  plugins: [],
}
