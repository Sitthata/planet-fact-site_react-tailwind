/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm : "880px",
      },
      colors: {
        "main-bg": "#070724",
        grey: {
          100: "#38384F",
          200: "#838391",
        },
        extend: {
          custom: {
            50: '#DEF4FC',
            100: '#F7CC7F',
            200: '#545BFE',
            300: '#FF6A45',
            400: '#ECAD7A',
            500: '#FCCB6B',
            600: '#65F0D5',
            700: '#497EFA',
          },
        },
      },
      fontFamily: {
        'sans': ['Spartan', 'sans-serif'],
        'head' : ['Antonio', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
