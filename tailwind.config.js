/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "colors-primary": "#362FD9",
        "dark-color": "#1e1e1e",
        "color-purple-bold": "#1812AE",
        "color-purple-light": "#362FD9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "50px",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
      center: true,
    },
  },
  plugins: [],
};
