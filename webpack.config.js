const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  name: 'Pate play config',
  devtool: 'development' === process.env.NODE_ENV ? 'eval-source-map' : 'source-map',
  mode: 'development' === process.env.NODE_ENV ? 'development' : 'production',
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/browser'),
    filename: '[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(embeded.svg)$/,
        type: 'asset/source',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
  plugins: [
    // extract css to external stylesheet file
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // prepare HTML file with assets
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: './public/favicon.ico',
      minify: 'auto',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/*.ico'),
          to: path.resolve(__dirname, 'dist/browser'),
        },
        {
          from: path.resolve(__dirname, 'public/*.png'),
          to: path.resolve(__dirname, 'dist/browser'),
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.css', '.mjs', '.cjs', '.js', '.json'],
    alias: {
      '@patePlay': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
};
