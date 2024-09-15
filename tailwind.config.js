/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      "carousel-move": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "carousel-move": "carousel-move var(--duration,80s) infinite",
    },
    extend: {},
  },
  plugins: [],
};
