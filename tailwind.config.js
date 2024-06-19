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
        green: "#A30f9b0f",
        nuetral: "#0A0A0A",
      },
      //  backgroundImage: {
      //   'green-gradient': 'linear-gradient(to right, #000000, #0f9b0f)',
      //   'black-gradient': 'radial-gradient(circle at 50% 50%, #434343, #3a3a3a, #313131, #282828, #202020, #181818, #0e0e0e, #000000)',
      //   'custome-gradient':'linear-gradient(to top, #000000,#2D3436)',
      //   'purple-gradient': 'linear-gradient(to top, #4776e6, #8e54e9)',
      //   'new-custom':'radial-gradient(circle at 50% 50%, #1bfd9c, #24d584, #27ae6d, #268957, #226541, #1c432d, #13241a, #000000)',
      //   'new-style':'radial-gradient(circle at 50% 50%, #00cc8e, #0da97a, #178a67, #1e6d55, #215444, #223d35, #202a27, #1a1a1a)',
      //   'new-style2':'radial-gradient(circle at 50% 50%, #00cc8e, #00af7a, #009265, #007551, #00573d, #003a29, #001d14, #000000)'
      // },
      backgroundImage: (theme) => ({
        "light-gradient": "  linear-gradient(to bottom, #abbaab,#e6dada)  ",
        "dark-gradient": " linear-gradient(to top, #692fd1, #4f2ead, #392989, #282265, #1c1a42, #181633, #141224, #0d0b16, #0d0b16, #0d0b16, #0d0b16, #0d0b16)",
        "custome-gradient": "linear-gradient(to top, #000000,#2D3436)",
      }),
    },
  },
  plugins: [ ]
};
