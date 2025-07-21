/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",    // Royal Purple
        accent: "#F59E42",     // Vibrant Orange
        secondary: "#14B8A6",  // Teal
        background: "#F8FAFC", // Soft Gray
      },
    },
    fontFamily: {
      sans: ["Poppins", "Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
