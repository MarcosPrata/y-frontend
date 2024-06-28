import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accentBlue: '#1e90e9',
        gray1: '#666b6f',
        gray2: '#1d2023',
        gray3: '#6a6a6a',
        paleWhite: '#e3e6e7',
        blackTranslucent:"rgba(0, 0, 0, 0.65)"
      },
      boxShadow: {
        'custom-light': 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
export default config;
