/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssm': '450px',
      },
      fontFamily: {
        'pop-pin': ['PopPin', 'sans-serif'],
        // You can add more font families here
      },
      colors: {
        'light-coffee': '#C89F94',
        'best-product': '#dadada',
        
      },
      keyframes: {
        slideRight: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        moveUpDown: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-10%)',
          },
        },
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        moveUpDown: 'moveUpDown 0.8s infinite alternate',
        slideRight: 'slideRight 32s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },

  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",	
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

