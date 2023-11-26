/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      primary: '#7743DB',
      secondary: '#C3ACD0',
      ternary: '#F7EFE5',
      quaternary: '#FFFBF5',
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|border)-(transparent|primary|white|purple|midnight|metal|tahiti|silver|bermuda)/,
    },
  ],
  plugins: [require('@tailwindcss/typography')],
};
