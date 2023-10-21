/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      colors: {
        primary: "#e30613",
        borderColorPrimary: "rgba(255,255,255,0.5)",
        textColorPrimary: "#4f5665",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      boxShadow: {
        custom: "0 -10px 19px 2px rgba(0, 0, 0, 0.101)",
        custom2: "0 10px 40px 2px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
