const colors = require('tailwindcss/colors');
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.neutral,
        purple: colors.purple,
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: { default: ['Roboto', 'ui-serif', 'ui-sans-serif'] },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
export default config;
