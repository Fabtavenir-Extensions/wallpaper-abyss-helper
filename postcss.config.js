/**
 * @type {import('postcss').ProcessOptions}
 */
/* postcss.config.js */
const path = require('path');
const tailwindCSSPath = path.join(__dirname, "cfg/tailwind.config.js")
console.log('tailwindCSSPath', tailwindCSSPath)
module.exports = {
  plugins: {
    tailwindcss: {
			config:tailwindCSSPath
    },
    autoprefixer: {},
  },
};
