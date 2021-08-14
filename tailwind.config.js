module.exports = {
  purge: [
    'components/*.tsx',
    'components/**/*.tsx',
    'pages/*.tsx',
    'pages/**/*.tsx',
    // 'pages/**/*.jsx',
    // 'pages/**/*.js',
    // 'components/***/*.jsx',
    // 'pages/**/*.tsx',
    // 'pages/**/*.tsx',
    // 'components/***/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'screen-half': '50vw'
      },
      padding: {
        '1/2': '50%',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
