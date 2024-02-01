/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['"Jost", sans-serif'],
    },
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
