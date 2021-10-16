module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily:{
          Poppins: ["Poppins, sans-serif"],
          Heading:["Sora, sans-serif"]
      },
      container:{
        center:true,
        padding:"1rem",
        screens:{
          lg:"1334px",
          xl:"1334px",
          "2xl":"1334px"
        }
      },
      backgroundColor:{
        'PrimaryColor':"#1e1e1e",
        'SecondColor':"#181818",
      },
      borderWidth:{
        'border1':'1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
