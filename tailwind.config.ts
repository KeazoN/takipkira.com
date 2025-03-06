import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#0A60D5",
        secondary: "#041F4C",
        darkSecondary: "#0043FF",
        softWhite: "#EBF4F6",
        success: "#1D8B8B",
        danger: "#8B261D",
        warning: "#F5853E",
        darkSoftWhite: "#1A2B30",
      },
      backgroundColor: {
        graidentHero:
          "linear-gradient(20deg, rgba(10,96,213,0.6) 0%, rgba(10,96,213,0) 100%);",
      },
    },
  },
  plugins: [],
};
export default config;
