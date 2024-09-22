/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // This will include all HTML and JS files in the current directory
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Include DaisyUI plugin here
};
