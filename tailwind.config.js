/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html, js}'],
  theme: {
    extend: {
      animation: {
           glowPurple: 'glowPurple 3s ease-in-out infinite',
        },
      keyframes: {
        glowPurple: {
          '0%': { boxShadow: '0 0 3px #fff' },
          '50%': { boxShadow: '0 0 5px #fff, 0 0 50px rgb(147 51 234)' },
          '100%': { boxShadow: '0 0 3px #fff' },
        },
        
      }





      
    },
  },
  plugins: [

  ],
}

