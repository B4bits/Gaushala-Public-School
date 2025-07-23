/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a237e",    // Royal Purple
        accent: "#5c6bc0",     // Vibrant Orange
        secondary: "#666a73",  // Teal
        background: "#f8fafc", // Soft Gray
      },
    },
    fontFamily: {
      sans: ["Poppins", "Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
