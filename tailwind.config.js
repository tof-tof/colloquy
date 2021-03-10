module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  },
	darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4855A9',
        secondary: '#D2D1FC',
        'themeDarkBlue':'#1E2975',
      },
      margin: {
        '1/2': '50%',
        '1/4': '25%',
        '1/5': '20%',
      },
      padding: {
        '1/5': '20%',
      },
      maxWidth: {
        '1/5': '20%',
        '4/5': '80%',
        '1/2': '50%',
        '3/4': '75%',
       }
    }
  },
  variants: {
    extend: {
      borderColor:['active'],
    },
  },
  plugins: [
		require('@tailwindcss/forms'),
	],
}
