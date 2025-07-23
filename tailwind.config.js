/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f51b5",      // Indigo (trust, expertise)
        accent: "#4fc3f7",       // Sky Blue (friendly highlights)
        secondary: "#273143",    // Slate Gray (subtle contrast)
        background: "#f4f6f8",   // Soft Cool Gray (clean background)
        success: "#10b981",      // Emerald (positive highlights)
      },
    },
    fontFamily: {
      sans: ["Poppins", "Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
