/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['"Prompt", sans-serif;'],
      },
      colors: {
        bg: "#000000",
        "card": "#0e1218",
        text: "#f1f1f1",
        "img-profile": "#8257e5",
        buttons: " #fff",
        "border-button": "#1a1a1a",
      },
    },
  },
  plugins: [],
};
