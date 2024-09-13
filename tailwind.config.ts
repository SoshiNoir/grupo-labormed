// tailwind.config.ts
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#52A84F',
          90: '#1D5D43',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#D2AE6D',
        },
      },
      fontFamily: {
        RobotoMono: ["Roboto Mono"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.fade-in': {
          opacity: '1',
          display: 'block',
          transition: 'opacity 0.5s ease-in-out',
        },
        '.fade-out': {
          opacity: '0',
          transition: 'opacity 0.5s ease-in-out',
        },
        '.hidden': {
          display: 'none',
        },
      });
    }),
  ],
};

export default config;
