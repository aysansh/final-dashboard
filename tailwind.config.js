/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profile-cover": "url('./src/assets/img/profile-cover.jpg')",
      },
      boxShadow: {
        "main-shadow":
          "0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08);",
      },
    },
    fontFamily: {
      "fontFamily": ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}

