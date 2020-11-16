const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const fileNames = '[hash]_[name]';

module.exports = {
  devServer: {
    port: 4200,
    open: true,
  },

  entry: './src/index.tsx',

  output: {
    filename: `${fileNames}.js`,
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
        test: /\.(ts|tsx)$/i,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: `${fileNames}.css` }),
    new CleanWebpackPlugin(),
    new TerserPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'public' }],
    }),
  ],
};
