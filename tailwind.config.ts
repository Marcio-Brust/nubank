import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-nubank": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nubankPurple: "#9400d3",
        nubankViolet: "#ee82ee",
        nubankBlack: "#000",
        nubankDarkBlue: "#00008b",
        nubankGunpowderBlue: "#b0e0e6",
        nubankGold: "#daa520",
      },
      animation: {
        float: "float 1s ease-in-out infinite",
        vertical: "vertical 0.8s ease-in-out forwards",
        horizontal: "horizontal 0.8s ease-in-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translatey(0)" },
          "50%": { transform: "translatey(-50px)" },
        },
        vertical: {
          to: { transform: "rotate(90deg)" },
          from: { transform: "rotate(0deg)" },
        },
        horizontal: {
          to: { transform: "rotate(0deg)" },
          from: { transform: "rotate(90deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
