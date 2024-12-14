/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', '!./node_modules'],
  theme: {
    extend: {
      colors: ({ colors }) => {
        return {
          accent: colors.sky,
          focused: colors.pink[500],
          vscodebg: '#1e1e1e',
          panelSpacing: 'black',
          toolbar: 'rgb(57, 59, 62)',
        };
      },
    },
  },
  // CAREFUL! Be specific with regexes!
  // https://github.com/tailwindlabs/tailwindcss/issues/8845#issuecomment-1184569469
  safelist: [
    {
      pattern: /(^text|outline|bg|border|shadow|w|h)-[a-z]+-\d+$/,
      variants: ['hover', 'focus', 'active', 'group-hover', 'before'],
    },
  ],
  plugins: [],
};

