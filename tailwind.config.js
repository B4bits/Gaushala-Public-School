/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
       primary: "#206040",      // Deep Green
        accent: "#f9dbbb",       // Sand
        secondary: "#343a40",    // Charcoal Gray
        background: "#f7f3ee",   // Cream
        cta: "#f26a3e",          // Burnt Orange (for important buttons)
      },
    },
    fontFamily: {
      sans: ["Poppins", "Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
