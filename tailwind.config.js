module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        bg: "#1c1c1c",
        cream: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
 