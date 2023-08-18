/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
        fontFamily: {
          nunito: ["Nunito", "sans-serif"],
          clashDisplay: ['Clash Display', 'sans-serif'],
          montserrat: ['Montserrat, sans-serif']
        },
        colors: {
          libertyBlue: '#032282',
          // libertyGray: '#818181',
          libertyDarkBlue: '#07112d',
          libertyRed: '#F00',
          libertyLightBlue:'#192749',
          libertyLightPurple:'#ecf0ff',
          libertyLighterBlue: "#2D4696", 
          libertyGray:"#F8F9FB"        
        }
      },
  },
  plugins: [],
}
