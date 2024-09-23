/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#dbdad7",

          secondary: "#007cd6",

          accent: "#00ec00",

          neutral: "#2b2313",

          info: "#00bfff",

          success: "#B4F461",

          warning: "#e18e00",

          error: "#ff598e",
        },
      },
    ],
  },
};
