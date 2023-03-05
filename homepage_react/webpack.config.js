const path = require('path');

module.exports = {
  mode: 'development', // or 'production' if you're building for production
  entry: './src/index.js', // path to your app's entry point
  output: {
    filename: 'bundle.js', // name of the compiled file
    path: path.resolve(__dirname, 'dist'), // path to the output directory
  },
  resolve: {
    fallback: {
      "querystring": require.resolve("querystring-es3")
    }
  },
  node: {
    // Add a global fallback for the 'querystring' module
    global: true
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
