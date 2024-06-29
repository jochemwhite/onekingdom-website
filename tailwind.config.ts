import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-inter)"],
        title: ["var(--font-assassin)"],
      },

      colors: {
        primary: "#111111",
        secondary: "#0A0A0A",
        accent: "#252525",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        lineFromTopToBottom: {
          "0%": {
            transform: "scaleY(0)",
            "transform-origin": "top",
          },
          "100%": {
            transform: "scaleY(1)",
            "transform-origin": "top",
          },
        },
        lineFrombottomToBottomEnd: {
          "0%": {
            transform: "scaleY(1)",
            "transform-origin": "top",
            display: "block",
          },
          "100%": {
            transform: "scaleY(0)",
            "transform-origin": "top",
            display: "none",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        lineFromTopToBottom: "lineFromTopToBottom .3s ease-in ",
        lineFrombottomToBottomEnd: "lineFrombottomToBottomEnd .3s ease-in  ",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
