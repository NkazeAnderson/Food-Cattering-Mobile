/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter400:"Inter_400Regular",
      Inter700:"Inter_700Bold",
      Inter500:"Inter_500Medium",
      Inter600:"Inter_600SemiBold",
    },
    colors: {
      light:"#F5F5F5",
      "light-bg": "#F5F5F5",
      bgGreen: "#DAECDF",
      primary:"#9AD983",
      "text-1":"#323434",
      "text-2":"#888888",
      "warning":"#FFC804",
    },
    fontSize: {
      32: "32px",
      28: "28px",
      24: "24px",
      22: "22px",
      16: "16px",
      14: "14px",
      12: "12px",
      20: "20x",
    },
    lineHeight: {
      40: "40px",
      36: "36px",
      32: "32px",
      28: "28px",
      24: "24px",
      14: "14px",
      16: "16px",
      20: "20x",
    },
    letterSpacing: {
      1: "0.1px",
      25: "0.25px",
      5: "0.5px",
    },
    
    extend: {},
  },
  plugins: [],
}

