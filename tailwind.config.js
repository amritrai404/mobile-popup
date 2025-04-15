/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
    theme: {
      extend: {
        // ✅ Custom Colors
        colors: {
          stroke: "#e5efff",
          primary: "#2ac3d5",
        },
  
        // ✅ Custom Fonts
        fontFamily: {
          inter: ["Inter", "sans-serif"],
          openSans: ["Open Sans", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
        },
      },
    },
  
    plugins: [],
  };
  