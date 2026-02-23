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
        "nm-bg": "#e8eaf0",
        "nm-text": "#4a5568",
        "nm-muted": "#9aa5b4",
        "nm-accent": "#6366f1",
      },
      boxShadow: {
        "nm-flat": "6px 6px 12px #c5c8d0, -6px -6px 12px #ffffff",
        "nm-card": "10px 10px 20px #c5c8d0, -10px -10px 20px #ffffff",
        "nm-pressed":
          "inset 4px 4px 8px #c5c8d0, inset -4px -4px 8px #ffffff",
        "nm-input":
          "inset 3px 3px 6px #c5c8d0, inset -3px -3px 6px #ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
