/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      spacing: {
        35: '35px',
        36: '36px'
      },
      colors: {},
      gridTemplateColumns: {
        13: 'repeat(auto-fit, minmax(300px,1fr))'
      },
    }
  },
  plugins: []
};
