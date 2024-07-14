/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      screens: {
        sm: "540px",
        md: "856px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        black: "#000000",
        primary: "#A31ED760",
        green: "#70e000",
        nuetral: "#0A0A0A",
      },
      backgroundImage: (theme) => ({
        "light-gradient": "  linear-gradient(to bottom, #abbaab,#e6dada)  ",
        "dark-gradient": " linear-gradient(to top, #692fd1, #4f2ead, #392989, #282265, #1c1a42, #181633, #141224, #0d0b16, #0d0b16, #0d0b16, #0d0b16, #0d0b16)",
        "custome-gradient": "linear-gradient(to top, #000000,#2D3436)",
      }),
    },
  },
  plugins: [ ]
};
