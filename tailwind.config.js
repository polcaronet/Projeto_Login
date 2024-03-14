/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
      floatUP:{
        "%0": {transform: "translatey(0px)"},
        "50%": { transform: "translatey(-8px)"},
        "100%": { transform: "translatey(0px)"},
       }
      },
      animation:{
       floatUP: "floatUP 2s infinite"
      },
      colors:{
       vermelho:"#B3093F", vinho:"#451531", piscina:"#64B7CC", pink:"#FF3877"
      }
    },
  },
  plugins: [],
}

