/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(2px)' },
        },
        fly: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(200vw)' },
        }
      },
      animation: {
        'subtle-float': 'subtle-float 4s ease-in-out infinite',
         fly: 'fly linear infinite',
      }
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        coffee: {
          ...require("daisyui/src/theming/themes")["coffee"],
          "base-100": "#1f2937", // Gray 800
          "base-200": "#374151", // Gray 700
          "base-300": "#4b5563", // Gray 600
        },
      },
    ],
  },
};