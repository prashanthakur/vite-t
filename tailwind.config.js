/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
     colors:{
      'primary':'rgb(196,185,254)',
      'blackish':' #003300',
    }
    },
  },
  plugins: [],
}

