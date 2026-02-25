import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lighter: "#233554",
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
          white: "#e6f1ff",
        },
        accent: {
          DEFAULT: "#64ffda",
          muted: "rgba(100, 255, 218, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "hero-lg": "clamp(2.5rem, 5vw, 4.5rem)",
        "hero-sm": "clamp(1rem, 2vw, 1.25rem)",
        "section": "clamp(1.5rem, 3vw, 2rem)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(100, 255, 218, 0.15)",
        "glow-lg": "0 0 40px rgba(100, 255, 218, 0.2)",
        card: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
