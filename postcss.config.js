module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  ident: 'postcss',
  plugins: [
    [
      'postcss-preset-env',
      {
        features: {
          'nesting-rules': true,
          'custom-properties': false, // when false ```var(--property-name)``` not replaced with property value
        },
        importFrom: ['./src/app/styles.css'],
        preserve: false,
        stage: 1,
      },
    ],
  ],
}
