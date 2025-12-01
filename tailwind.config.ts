// tailwind.config.ts

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        thera: {
          50:  "#f9fafb",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#22d3ee",
          800: "#020919",
          900: "#020817",
          950: "#020617",
        },
        accent: {
          rose: "#fb7185",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.65)",
      },
    },
  },
  plugins: [],
}

export default config
