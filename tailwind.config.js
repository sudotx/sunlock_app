/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '500px',
        md: '628px',
        lg: '884px',
        xl: '1140px',
        '2xl': '1296px',
      },
    },
  },
  plugins: [],
}

