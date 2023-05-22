// const path = require('path')

// module.exports = {
//   mode: 'development', // or 'production'
//   entry: './src/index.js', // Update the entry point based on your project's structure
//   output: {
//     path: path.resolve(__dirname, 'dist'), // Update the output path based on your project's structure
//     filename: 'bundle.js',
//   },
//   resolve: {
//     fallback: {
//       async_hooks: false,
//     },
//   },
// }

const path = require('path')

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js', // Update the entry point based on your project's structure
  output: {
    path: path.resolve(__dirname, 'dist'), // Update the output path based on your project's structure
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      async_hooks: false,
      crypto: require.resolve('crypto-browserify'),
      fs: false, // or require.resolve('fs-extra') if you need a fallback for the 'fs' module
      os: require.resolve('os-browserify/browser'),
      http: require.resolve('stream-http'),
      net: false,
      url: require.resolve('url'),
      buffer: require.resolve('buffer/'),
      zlib: require.resolve('browserify-zlib'),
      assert: false,
    },
  },
}
