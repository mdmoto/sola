/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        cola: {
          blue: {
            DEFAULT: '#004A81',
            light: '#1B6DA8',
            dark: '#003359'
          },
          yellow: {
            DEFAULT: '#FFB81C',
            light: '#FFCB4F',
            dark: '#D99811'
          }
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
