import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";

const config = {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}", "./client/index.html"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    // Responsive breakpoints
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1536px",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },

      colors: {
        // Semantic color system using CSS variables for theming support
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Brand color palette - Direct hex values
        brand: {
          // Primary / Brand Blue - #0d123c
          blue: {
            DEFAULT: "#0d123c",
            50: "#f0f1f9",
            100: "#e1e3f3",
            200: "#c3c7e7",
            300: "#a5abdb",
            400: "#878fcf",
            500: "#6973c3",
            600: "#4b57b7",
            700: "#2d3bab",
            800: "#1a2470",
            900: "#0d123c", // Main brand blue
            950: "#070a1e",
          },
          // Accent / Button Hover / CTA - #ff751f
          orange: {
            DEFAULT: "#ff751f",
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#ff751f", // Main accent orange
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            950: "#431407",
          },
          // Neutral / Border / Secondary Text - #a6a6a6
          gray: {
            DEFAULT: "#a6a6a6",
            50: "#f9f9f9",
            100: "#f3f3f3",
            200: "#e7e7e7",
            300: "#d4d4d4",
            400: "#b8b8b8",
            500: "#a6a6a6", // Main neutral gray
            600: "#8a8a8a",
            700: "#6e6e6e",
            800: "#525252",
            900: "#363636",
            950: "#1a1a1a",
          },
          // Highlight / Success / Accent Text - #c2f087
          green: {
            DEFAULT: "#c2f087",
            50: "#f6fef1",
            100: "#e9fcdb",
            200: "#d5f9b9",
            300: "#c2f087", // Main highlight green
            400: "#a8e85f",
            500: "#8fd03f",
            600: "#70a62f",
            700: "#597f27",
            800: "#486524",
            900: "#3d5422",
            950: "#1f2f0e",
          },
          // Light Background / Section Background - #efeeec
          beige: {
            DEFAULT: "#efeeec",
            50: "#fafaf9",
            100: "#efeeec", // Main light background
            200: "#e5e3e0",
            300: "#d0cdc8",
            400: "#b8b4ad",
            500: "#9f9a91",
            600: "#888379",
            700: "#706c63",
            800: "#5e5b53",
            900: "#504e47",
            950: "#2a2824",
          },
        },

        // Legacy color names (maintaining backward compatibility)
        "bor-black": "#0d123c",
        "bor-white": "#ffffff",
        "bor-beig": "#efeeec",
        "bor-orange": "#ff751f",
        "bor-green": "#c2f087",
        "bor-gray": "#a6a6a6",
        "bor-background": "#0d123c",
        "bor-foreground": "#efeeec",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
} satisfies Config;

export default config;
