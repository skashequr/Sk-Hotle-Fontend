/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tas-beginner': ['Edu TAS Beginner', 'cursive'],
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
}
