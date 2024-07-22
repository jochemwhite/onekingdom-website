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
        primary: ["var(--font-nunito)"],
        title: ["var(--font-assassin)"],
        'blog-title': ["var(--font-heebo)"],
      },

      colors: {
        primary: "#111111",
        secondary: "#0A0A0A",
        accent: "#252525",
        

        "text-primary": "#CCCCCC",
        "text-accent": "#78f701",
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        lineFromTopToBottom: "lineFromTopToBottom .3s ease-in ",
        lineFrombottomToBottomEnd: "lineFrombottomToBottomEnd .3s ease-in  ",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
