module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontFamily:{
        Poppins : ['Poppins', 'sans-serif']
      },
      colors: {
        "text-color":'#262524',
        'primary-color' : '#264373',
        "main-background":'#E5E5E5',
        'secondary-color':'#6765F0',
        'background-blur-1':'#D388FF',
        "background-blur-2":"#F3B411",
        "background-blur-3":'#50BEF4',
        "background-blur-4": "#5478EF",
        "gradient-1":"#6462F0",
        "gradient-2":"#9190E9"
      },
    },
  },
  plugins: [],
};
