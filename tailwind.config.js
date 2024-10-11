/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, serif',
      },
      backgroundImage: {
        'liquid-cheese': "url('/src/assets/liquid-cheese.svg')",
      },
    },
  },
  plugins: [],
}
