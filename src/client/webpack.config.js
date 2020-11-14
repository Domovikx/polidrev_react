const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  devServer: { port: 4200 },

  entry: './src/components/index.tsx',

  output: {
    filename: '[hash:8].[name].js',
    path: path.resolve(__dirname, 'build'),
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/components/index.html' }),
    new MiniCssExtractPlugin({
      filename: './src/main.css',
    }),
    new CleanWebpackPlugin(),
    new TerserPlugin(),
  ],
};
