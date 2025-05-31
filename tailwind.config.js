module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#142575",
          foreground: "#ffffff",
          light: "#1e40af",
          dark: "#0f1d5a",
        },
        secondary: {
          background: "#f5f7fe",
          foreground: "#32354f",
          light: "#ffffff",
          dark: "#145275",
        },
        accent: {
          DEFAULT: "#65b7cc",
          foreground: "#ffffff",
          light: "#6bb4da",
          dark: "#5a9fb0",
        },
        border: {
          primary: "#c2c2c2",
          secondary: "#eaeff4cc",
          light: "#e0e0e0",
          dark: "#666666",
        },
      },
      fontFamily: {
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};