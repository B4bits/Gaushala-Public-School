/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9ECAD6",    // Royal Purple
        accent: "#748DAE",     // Vibrant Orange
        secondary: "#F5CBCB",  // Teal
        background: "#FFEAEA", // Soft Gray
      },
    },
    fontFamily: {
      sans: ["Poppins", "Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
