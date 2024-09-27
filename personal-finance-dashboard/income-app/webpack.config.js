const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // This ensures routing works correctly
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Correct path to the index.html in the public folder
      filename: 'index.html', // Output filename in the dist folder
      inject: 'body', // Inject the bundle.js into the body
    }),
  ],
  devServer: {
    port: 3001,
    static: {
      directory: path.join(__dirname, 'dist'), // Serve static files from the dist directory
    },
    historyApiFallback: true, // Enable support for HTML5 history API
  },
};
