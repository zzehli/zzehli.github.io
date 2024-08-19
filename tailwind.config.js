/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
            "./proj/*.{html,js}",   
  ],  
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      }
    },
    fontFamily:{
      'sans': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

// https://coolors.co/fe938c-e6b89c-ead2ac-9cafb7-4281a4