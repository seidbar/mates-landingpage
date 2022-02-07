module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
        'poppins':  ['Poppins', 'sans-serif'],
    },
    extend: {
        colors: {
            magnolia: '#ebedfa',
            candy: '#ed6f78',
            ghost: '#fbfbff',
            cultured: '#f5f5f5'
        }
    },
  },
  plugins: [],
};
