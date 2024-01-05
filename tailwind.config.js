/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: {'max':'345px'},
      md: {'max':'767px'},
      'me':"576px",
      'mn':"767px",
      lg: "1024px",
      'ln': "1152px",
      'xl' : "1248px",
      '2xl' : "2000px",
    },

    lg: {
      biggest_font_size: "6rem",
      bigger_font_size: "4rem",
      big_font_size: "3.5rem",
      h1_font_size: "2.25rem",
      h2_font_size: "1.5rem",
      h3_font_size: "1.25rem",
      normal_font_size: "1rem",
      small_font_size: ".875rem",
      smaller_font_size: ".813rem",
    },
    extend: {
      colors: {
        first_color: "#8b52ff",
        second_color: "#ff52ae",
        first_color_light: "#e5d9fd",
        first_color_dark: "#1e0849",
        title_color: "#220953",
        text_color: "#4b3e65",
        text_color_light: "#a197b4",
        white_color: "#ffffff",
        body_color: "#f5f0ff",
        container_color: "#ffffff",
        transparent: 'transparent',
        dark_body_color: '#14092a',
        dark_title_color: '#d1c0f1',
        dark_text_color: '#a094b8',
        dark_container_color: '#372a51',
      },
      backgroundImage: {
        gradient_color: 'linear-gradient(75deg, theme(colors.second_color) 12%, theme(colors.first_color) 90%)',
      },
      
      backgroundClip: {
        text: 'text', // Add the "text" value
      },
      
      gridTemplateColumns: {
        'initial': 'initial',
        'max2': 'repeat(2, max-content)',
        'max3': 'repeat(3, max-content)',
        '2-400px' : 'repeat(2, 400px)',
        '2-500px' : 'repeat(2, 500px)',
        '300px-max' : '300px max-content',
        '340px-max' : '340px max-content',
        'max-200-max' : 'max-content 200px max-content',
        'max-400-max' : 'max-content 400px max-content',
        '470px-580px' : '470px 580px',
        '540px-250px' : '540px 520px',
        '500px-580px' : '500px 580px',
        '500px-600px' : '500px 600px',
      },
      
      boxShadow:{
        '3xl': '0 4px 12px hsla(260, 100%, 52%, .3)',
      },
      fontFamily: {
        body_font: ["Poppins", "sans_serif"],
        second_font: ["Lora", "serif"]
      },
      fontSize: {
        biggest_font_size: "2.75rem",
        bigger_font_size: "2rem",
        big_font_size: "1.75rem",
        h1_font_size: "1.5rem",
        h2_font_size: "1.25rem",
        h3_font_size: "1rem",
        normal_font_size: ".938rem",
        small_font_size: ".813rem",
        smaller_font_size: ".75rem",
        header_height: "3.5rem"
      },

      // height: {
      //   'height-cal': 'calc(var(--header_height)',
      // },

      fontWeight: {
        font_regular: "400",
        font_medium: "500",
      },
      zIndex: {
        z_tooltip: "10",
        z_fixed: "100",
      }
    },
  },
  plugins:  ["prettier-plugin-tailwindcss"],
}