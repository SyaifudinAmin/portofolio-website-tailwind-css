/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '19px',
    },
    extend: {
      colors: {
        cUtama : '#14b8a6',
        cDark : '#0f172a',
        csecond: '#64748b',
      
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

