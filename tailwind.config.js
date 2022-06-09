module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
      },
      gridTemplateColumns: {
        250: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};
