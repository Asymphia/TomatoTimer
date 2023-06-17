/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "vsm": "5px",
        "sm": "15px",
        "md": "30px",
        "lg": "45px",
        "vlg": "60px",
        "xl": "90px",
      },
      colors: {
        "red": "#B9463E",
        "darkred": "#87302B",
        "green": "#42A042",
        "darkgreen": "#0F730F",
        "grey": "#808080",
        "darkgrey": "#565656",
        "white-translucent": "#FFFFFF32",
      },
      fontSize: {
        "xl": "128px",
        "lg": "32px",
        "md": "24px",
        "sm-xl": "100px",
        "sm-lg": "24px",
        "sm-md": "20px",
      },
      boxShadow: {
        "red": "0px 3px 0px 1px rgba(135, 48, 43, 1)",
        "green": "0px 3px 0px 1px rgba(15, 115, 15, 1)",
        "grey": "0px 3px 0px 1px rgba(86, 86, 86, 1)",
      },
    },
  },
  plugins: [],
}

