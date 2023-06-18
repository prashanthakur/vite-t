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
      // 'primary':'rgb(196,185,254)',
      'primary':'#068DA9',
      'whitish':' #ECF8F9',
      'maroon':'#7E1717',
      'pulp':'#E55807'
    }
    },
  },
  plugins: [],
}

