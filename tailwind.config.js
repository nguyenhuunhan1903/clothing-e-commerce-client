/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm:'375px',
      lg:'1366px',
      xl:'1920px'
    },
    colors:{
      'primary':'#F3C301',
      'primary2':'#FEE3A2',
      'primary3':'#058240',
      'primary4':'#87C159',
      'black':'#000000',
      'write':'#FFFFFF',
      'secondary':'#ADCACB',
      'secondary2':'#4A707A',
      'secondary3':'#7697A0',
      'active-color':'#058240',
      'brightest-yellow':'#FFEA00',
      'error-color':'#ED413E',
      'warning-color':'#7C815',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
