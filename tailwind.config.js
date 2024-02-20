/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      "white": '#fff',
      "black": '#565A5D',
      "primary": '#FAA73F',
      "info": '#565A5D',
      "warning": '#FBE04B',
      "danger": '#FF0F00',
      "rabbit-brown": '#847000',
      "rabbit-orange": {
        "light":'#FAA73F',
        "medium":'#F78F1E',
        "dark":'#F0733C',
      },
      "rabbit-yellow": '#FBE04B',
      "rabbit-green": {
        "light":'#5CB85C',
        "medium":'#02B53A',
        "dark":'#008400',
      },
      "rabbit-blue": {
        "light":'#E1EFFF',
        "medium":'#4880C1',
        "dark":'#002D62',
      },
      "rabbit-red": {
        "light":'#FF0F00',
        "dark":'#D1271D',
      },
      "rabbit-gray": {
        "so-light":'#F7F7F7',
        "light":'#D9D9D9',
        "medium":'#B4B4B4',
        "dark":'#828282',
      }
    }
  },
  plugins: [],
};
