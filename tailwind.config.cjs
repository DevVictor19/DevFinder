/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F6F8FF",
          text: "#2B3442",
          element: "#FEFEFE",
          soft: {
            400: "#4B6A9B",
            600: "#697C9A",
            "h-600": "#222731",
          },
        },
        dark: {
          background: "#141D2F",
          text: "#FFFFFF",
          element: "#1E2A47",
          soft: {
            400: "#FFFFFF",
            600: "#FFFFFF",
            "h-600": "#90A4D4",
          },
        },
        "custom-blue": "#0079FF",
        "h-custom-blue": "#60ABFF",
      },
      boxShadow: {
        light: "0px 16px 30px -10px #4660BB33",
      },
    },
  },
  plugins: [],
};
