module.exports = {
  darkMode: "class",
  // * Tailwind v3 always compiles just-in-time and only emits classes found in these files
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        facebook: "#1791f0",
        twitter: "#1da1f5",
        maingreen: "#3fac8e",
        bg: {
          // * bg-bg
          DEFAULT: "#f8f9ff",
          // * bg-bg-card
          card: "#f1f3fa",
        },
        darkbg: {
          DEFAULT: "#20222f",
          card: "#252b43",
          dark: "#1d2029",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
        },
      },
    },
  },
  plugins: [],
};
