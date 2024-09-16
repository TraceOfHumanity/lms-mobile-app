/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./app/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/(tabs)/meditate.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
