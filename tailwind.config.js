
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js,ts,tsx}',
    './components/**/*.{html,js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-1' : '#270043',
        'primary-2' : '#9135a5',
        'light-1' : '#d8e1ff',
        'light-2' : '#f3e9ff',
      },
      width: {
        '300' : '300px',
        '350' : '350px',
        '400' : '400px',
        '500' : '500px',
        '600' : '600px',
        '800' : '800px',
        },
        height: {
        '200' : '200px',
        '300' : '300px',
        '450' : '450px',
        '500' : '500px',
        '800' : '800px',
      }
    },
  },
  plugins: [],
}