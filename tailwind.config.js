/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/BG.png')",
        "footer-pattern": "url('./src/assets/images/FooterBG.png')",
      },
      fontFamily: {
        fairy: ["Playfair Display", "serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10%)" },
          "10%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 3s linear infinite both",
      },
    },
  },
  plugins: [],
};
