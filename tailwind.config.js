/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#04AA6D",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        xs: {
          max: "640px",
        },
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
