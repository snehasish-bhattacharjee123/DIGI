// import type { Config } from "tailwindcss";
// import tailwindcssAnimate from "tailwindcss-animate";
// import tailwindcssTypography from "@tailwindcss/typography";

// const config: Config = {
//   darkMode: ["class"],
//   content: ["./client/**/*.{ts,tsx}", "./client/index.html"],
//   prefix: "",

//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },

//     // Custom breakpoints
//     screens: {
//       sm: "640px",
//       md: "768px",
//       lg: "1280px",
//       xl: "1440px",
//       "2xl": "1536px",
//     },

//     extend: {
//       /* ------------------------------
//        * FONT FAMILY (using CSS vars)
//        * ------------------------------ */
//       fontFamily: {
//         sans: ["var(--font-sans)"],   // General Sans
//         serif: ["var(--font-serif)"], // Playfair Display
//         mono: ["var(--font-mono)"],   // Fira Code
//       },

//       /* ------------------------------
//        * BRAND COLORS
//        * ------------------------------ */
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",

//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },

//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },

//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },

//         /* ---------------------
//          * MAIN BRAND COLORS
//          * --------------------- */
//         brand: {
//           blue: {
//             DEFAULT: "#0d123c",
//             50: "#f0f1f9",
//             100: "#e1e3f3",
//             200: "#c3c7e7",
//             300: "#a5abdb",
//             400: "#878fcf",
//             500: "#6973c3",
//             600: "#4b57b7",
//             700: "#2d3bab",
//             800: "#1a2470",
//             900: "#0d123c",
//             950: "#070a1e",
//           },

//           orange: {
//             DEFAULT: "#ff751f",
//             50: "#fff7ed",
//             100: "#ffedd5",
//             200: "#fed7aa",
//             300: "#fdba74",
//             400: "#fb923c",
//             500: "#ff751f",
//             600: "#ea580c",
//             700: "#c2410c",
//             800: "#9a3412",
//             900: "#7c2d12",
//             950: "#431407",
//           },

//           gray: {
//             DEFAULT: "#a6a6a6",
//             50: "#f9f9f9",
//             100: "#f3f3f3",
//             200: "#e7e7e7",
//             300: "#d4d4d4",
//             400: "#b8b8b8",
//             500: "#a6a6a6",
//             600: "#8a8a8a",
//             700: "#6e6e6e",
//             800: "#525252",
//             900: "#363636",
//             950: "#1a1a1a",
//           },

//           green: {
//             DEFAULT: "#c2f087",
//             50: "#f6fef1",
//             100: "#e9fcdb",
//             200: "#d5f9b9",
//             300: "#c2f087",
//             400: "#a8e85f",
//             500: "#8fd03f",
//             600: "#70a62f",
//             700: "#597f27",
//             800: "#486524",
//             900: "#3d5422",
//             950: "#1f2f0e",
//           },

//           beige: {
//             DEFAULT: "#efeeec",
//             50: "#fafaf9",
//             100: "#efeeec",
//             200: "#e5e3e0",
//             300: "#d0cdc8",
//             400: "#b8b4ad",
//             500: "#9f9a91",
//             600: "#888379",
//             700: "#706c63",
//             800: "#5e5b53",
//             900: "#504e47",
//             950: "#2a2824",
//           },
//         },
//       },

//       /* ------------------------------
//        * BORDER RADIUS
//        * ------------------------------ */
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },

//       /* ------------------------------
//        * ANIMATIONS
//        * ------------------------------ */
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },

//   plugins: [tailwindcssAnimate, tailwindcssTypography],
// };

// export default config;

// import type { Config } from "tailwindcss";
// import tailwindcssAnimate from "tailwindcss-animate";
// import tailwindcssTypography from "@tailwindcss/typography";

// const config = {
//   darkMode: ["class"],
//   content: ["./client/**/*.{ts,tsx}", "./client/index.html"],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-sans)"],
//         serif: ["var(--font-serif)"],
//         mono: ["var(--font-mono)"],
//       },
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         "bor-black": "#0d123c",
//         "bor-white": "#ffffff",
//         "bor-beig": "#efeeec",
//         "bor-orange": "#ff751f",
//         "bor-green": "#c2f087",
//         "bor-gray": "#a6a6a6",
//         "bor-background": "#0d123c",
//         "bor-foreground": "#efeeec",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [tailwindcssAnimate, tailwindcssTypography],
// } satisfies Config;

// export default config;

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

    // 👇 Add or modify your responsive breakpoints here
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px", // changed from 1024px → now mobile view extends up to 1279px
      xl: "1440px",
      "2xl": "1536px",
    },

    extend: {
      fontFamily: {
        heading: ["var(--font-work-sans)"],
        sans: ["var(--font-work-sans)"],
        serif: ["var(--font-work-sans)"],
        mono: ["var(--font-azeret-mono)"],
        work: ["var(--font-work-sans)"],
        azeret: ["var(--font-azeret-mono)"],
        din: ["var(--font-din-next-light)"],
        "helvetica-neue-italic": [
          "Helvetica Neue Italic",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helvetica-neue-medium": [
          "Helvetica Neue Medium",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew01-45ligh": [
          "HelveticaNeueW01-45Ligh",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew01-55roma": [
          "HelveticaNeueW01-55Roma",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew01-65medi": [
          "HelveticaNeueW01-65Medi",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew01-75bold": [
          "HelveticaNeueW01-75Bold",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew01-95blac": [
          "HelveticaNeueW01-95Blac",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew01-thin": [
          "HelveticaNeueW01-Thin",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew01-ultlt": [
          "HelveticaNeueW01-UltLt",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew02-45ligh": [
          "HelveticaNeueW02-45Ligh",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew02-55roma": [
          "HelveticaNeueW02-55Roma",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew02-75bold": [
          "HelveticaNeueW02-75Bold",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew02-95blac": [
          "HelveticaNeueW02-95Blac",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew02-thin": [
          "HelveticaNeueW02-Thin",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew02-ultlt": [
          "HelveticaNeueW02-UltLt",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew10-35thin": [
          "HelveticaNeueW10-35Thin",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew10-45ligh": [
          "HelveticaNeueW10-45Ligh",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "helveticaneuew10-65medi": [
          "HelveticaNeueW10-65Medi",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "madefor-display": [
          "Madefor Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      fontSize: {
        "h2": "clamp(1.5rem, calc(45 * 1vw / 12.8), 3.75rem)",
        "h3": "14px",
        "h4": "clamp(0.875rem, calc(16 * 1vw / 12.8), 1.25rem)",
        "h5": "14px",
        "h6": "clamp(0.75rem, calc(12 * 1vw / 12.8), 1rem)",
        "body-lg": "20px",
        "body-md": "12px",
        "body-xs": "12px",
      },
      lineHeight: {
        "tight-1": "1em",
        "tight-13": "1.3em",
        "tight-14": "1.4em",
        "normal-16": "1.6em",
      },
      colors: {
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
        // Brand palette used across the app (text-brand-*, bg-brand-*)
        brand: {
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
            900: "#0d123c",
            950: "#070a1e",
          },
          orange: {
            DEFAULT: "#ff751f",
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#ff751f",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            950: "#431407",
          },
          gray: {
            DEFAULT: "#a6a6a6",
            50: "#f9f9f9",
            100: "#f3f3f3",
            200: "#e7e7e7",
            300: "#d4d4d4",
            400: "#b8b8b8",
            500: "#a6a6a6",
            600: "#8a8a8a",
            700: "#6e6e6e",
            800: "#525252",
            900: "#363636",
            950: "#1a1a1a",
          },
          green: {
            DEFAULT: "#c2f087",
            50: "#f6fef1",
            100: "#e9fcdb",
            200: "#d5f9b9",
            300: "#c2f087",
            400: "#a8e85f",
            500: "#8fd03f",
            600: "#70a62f",
            700: "#597f27",
            800: "#486524",
            900: "#3d5422",
            950: "#1f2f0e",
          },
          beige: {
            DEFAULT: "#efeeec",
            50: "#fafaf9",
            100: "#efeeec",
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
        "translate-to-top-right-center": {
          from: { transform: "translate(0, 0)" },
          to: { transform: "translate(0, 0)" },
        },
        "translate-move-top-right": {
          from: { transform: "translate(0, 0)" },
          to: { transform: "translate(8px, -8px)" },
        },
        "translate-move-bottom-left": {
          from: { transform: "translate(0, 0)" },
          to: { transform: "translate(-8px, 8px)" },
        },
        "translate-bottom-left-center": {
          from: { transform: "translate(-8px, 8px)" },
          to: { transform: "translate(0, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "translate-to-top-right-center": "translate-to-top-right-center 0.3s ease-out",
        "translate-move-top-right": "translate-move-top-right 0.3s ease-out",
        "translate-move-bottom-left": "translate-move-bottom-left 0.3s ease-out",
        "translate-bottom-left-center": "translate-bottom-left-center 0.3s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
} satisfies Config;

export default config;
