/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#000',
        'theme': '#D20001'
      }
    }
  },
  plugins: []
}
