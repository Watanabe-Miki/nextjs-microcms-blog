/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamilyBase: ["var(--font-notosan), sans-serif"],
      },
      spacing: {
        none: "0px",
        headerHeightPC: "100px",
        headerHeightMD: "80px",
      },
      colors: {
        main: "#7CD9D0",
        textBase: "#4F5665",
        bgBase: "#fff",
      },
      zIndex: {
        modal: "100",
        drawer: "40",
        floating: "30",
        header: "20",
        footer: "10",
        default: "1",
      },
      maxWidth: {
        inner: "1160px",
      },
      height: {
        headerHeightPC: "100px",
        headerHeightMD: "80px",
      },
    },
  },
  plugins: [],
};
