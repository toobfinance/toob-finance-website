import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dots-bg": "url(/bg.svg)",
      },
      screens: {
        sm: "480px",
        "3xl": "1824px",
      },
      container: {
        screens: {
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
          "3xl": "1536px",
        },
      },
    },
  },
  plugins: [],
}
export default config
