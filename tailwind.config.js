/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A2E2C", // Dark green
          light: "#388688",
          dark: "#096B52",
        },
        secondary: {
          DEFAULT: "#768D59", // Olive green
          light: "#516F55",
          dark: "#0A6C53",
        },
        accent: {
          DEFAULT: "#1F3337", // Dark blue-green
          light: "#096B52",
          dark: "#0A6C53",
        },
        neutral: {
          cream: "#F1F1F1",
          beige: "#E0E0E0",
          brown: "#1F3337",
          gray: "#516F55",
        },
        success: {
          DEFAULT: "#40916C",
          light: "#52B788",
        },
        warning: {
          DEFAULT: "#E9C46A",
          light: "#F4D58D",
        },
        custom: {
          gray1: "#1A2E2C",
          gray2: "#388688",
          gray3: "#768D59",
          gray4: "#516F55",
          gray5: "#1F3337",
          gray6: "#096B52",
          gray7: "#0A6C53",
        },
      },
      fontFamily: {
        serif: ["Optima", "Times New Roman", "serif"],
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "pattern-dots":
          "radial-gradient(circle, #00000011 1px, transparent 1px)",
        "gradient-primary":
          "linear-gradient(to right bottom, #1B4332, #2D6A4F)",
        "gradient-secondary":
          "linear-gradient(to right bottom, #E76F51, #F4A261)",
      },
    },
  },
  plugins: [],
};
