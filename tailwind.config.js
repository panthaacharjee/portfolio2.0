/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blur-color': '#2b252581',
        'black-color':"rgba(51, 51, 51, 0.821)",
        'crimson':"#a11851"
      },
    },
  },
  plugins: [],
}

