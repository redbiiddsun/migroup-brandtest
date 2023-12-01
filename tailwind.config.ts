/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
			sans: ['Mitr', 'sans-serif']
		},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
			grey: '#414042',
      lightgrey: '#DDDFE2',
      indigo: '#11638A',
      blue: '#8ACCEC',
      orange: '#B74523',
      purple: '#957CB6',
      green: '#3FAFA3'
    },
    extend: {},
  },
  plugins: [],
}