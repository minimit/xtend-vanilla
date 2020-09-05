const path = require('path')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          // if you want to fork javascript file add a local path.resolve as first in array
          'xtend-library': [path.resolve(__dirname, './dist/assets/xtend-library'), path.resolve(__dirname, './node_modules/xtend-library')],
        },
      },
    ],
  ],
}
