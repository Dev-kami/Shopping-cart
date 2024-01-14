/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(1, 1, 27)",
        darkGray: "rgb(51, 51, 51)",
        darkishYellow: "rgb(197, 170, 20)",
      },
    },
  },
  plugins: [],
};
