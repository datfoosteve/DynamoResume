module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0F4C8',
        slate: '#E1E1E8',
      },
      backgroundImage: {
        'header-background': "url('/images/header-background.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}