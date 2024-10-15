/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js" ],
  theme: {
    extend: {
      backgroundColor: {
        main:"#151937",
      }
    }
    
  },
  // de su dung darkmode thi dung darkMode:class
  darkMode: "class",
  plugins: [
    require('flowbite/plugin')
  ],
}