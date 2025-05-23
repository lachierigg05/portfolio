import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        asparagus: "#629460",
        lemon: "#FFFACC",
        cerulean: "#007EA7",
        bittersweet: "#F87666",
        github: "#501DAF",
        linkedin: "#0077B5"
      },
    },
  },
  plugins: [],
} satisfies Config;
