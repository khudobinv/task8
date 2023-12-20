/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'violet': '2px 2px 5px #4f46e5'
      }
    },
    content: {
      'agree': 'url("./agree.svg")',
    },
  },
  plugins: [],
}