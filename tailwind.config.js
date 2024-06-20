/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-100': '#BDC4E6',
        'primary-200': '#8C9CCC',
        'primary-300': '#8297E0',
        'primary-400': '#596799',
        'primary-500': '#4A5680',
        'primary-600': '#3B4466',
        'primary-700': '#2C334C',
        'primary-800': '#1E2233',
        'primary-900': '#0F111A',
        'secondary-100': '#FFDCA3',
        'secondary-200': '#E6C693',
        'secondary-300': '#CCB083',
        'secondary-400': '#B39A72',
        'background-main': '#f7f7f7',
      },
    },
  },
  plugins: [],
}
