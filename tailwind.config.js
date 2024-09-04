/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "sm":'480px',
      "md": '547px',
      'lg': '768px',
      'xl': '1024px',
      '2xl':'1680px'
    },
    extend: {
      fontFamily:{
        "roboto": ["Roboto", "sans-serif"]
      },
      height:{
        '1vh': '1vh',
      },
    },
  },
  plugins: [],
  
}

