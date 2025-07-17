module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60a5fa", // light blue
        secondary: "#facc15", // yellow
        accent: "#4ade80", // green
      },
      fontFamily: {
        sans: ["Poppins", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
