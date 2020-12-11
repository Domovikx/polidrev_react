const path = require('path');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env = {}) => {
  const { mode = 'production' } = env;
  const modeOption = mode === 'production' ? 'production' : 'development';
  const isProd = mode === 'production' ? true : false;

  const fileNames = '[hash]_[name]';
  const port = process.env.PORT;

  const cssStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ];
  };

  return {
    mode: modeOption,

    devServer: {
      port,
      open: true,
      hot: true,
      progress: true,

      historyApiFallback: true,
    },

    entry: './src/index.tsx',

    output: {
      publicPath: '/',

      filename: `${fileNames}.js`,
      path: path.resolve(__dirname, 'build'),
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimize: true,
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
          use: cssStyleLoaders(),
        },
        {
          test: /\.s[ac]ss$/i, // TODO: возможно, можно будет удалить
          use: [
            ...cssStyleLoaders(),
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        },
      ],
    },

    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin({ filename: `${fileNames}.css` }), // TODO: возможно, можно будет удалить
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [{ from: 'public', to: 'public' }],
      }),
    ],
  };
};
