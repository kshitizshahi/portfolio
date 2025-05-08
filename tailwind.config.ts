export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          dark: "var(--color-secondary-dark)",
        },
        background: {
          DEFAULT: "var(--color-background)",
          dark: "var(--color-background-dark)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          dark: "var(--color-text-dark)",
          btn: "var(--color-text-btn)",
        },
        custom: "var(--color-border-custom)",
        fontFamily: {
          sans: ["var(--font-inter)", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
