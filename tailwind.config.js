/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-bg' : "url('./src/assets/images/background-image.png')"
      },
      screens:{
        '1150px': '1150px',
        '975px' : '975px',
        '663px' : '663px',
        '541px' : '541px'
      }

    },

  },

  plugins: [],
}