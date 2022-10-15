/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemon: ['LEMON'],
        georgia: ['GEORGIA'],
        nunito: ['NUNITOSANS'],
        montserrat:['MONTSERRAT']

      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black10:"#101010",
        black21:"#211d1d",
        black3e:"#3e2a2a",
        artgrey: '#f6f6f6',
        artblack:'#2c2c2c',
        logo:'#9a3938',
        line:'#d9d9d9',
        lightGrey: "#3e2a2a",
        grey69:"#696969",
        grey84:"#848484"
      },
      fontSize: {
        xsmall:'14px',
        small: '16px',
        medium:'18px',
        xmedium:'20px',
        large:'30px',
        xlarge:'36px'
      }
    },
  },
  plugins: [],
}
