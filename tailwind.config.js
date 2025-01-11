/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#5264D9",
        offwhite: "#F4F4F4",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
