const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dirNode = 'node_modules'
const dirSrc = path.join(__dirname, 'src')
const dirStyles = path.join(__dirname, 'styles')
const dirAssets = path.join(__dirname, 'assets')

module.exports = env => {
  const IS_DEV = !!env.dev
  return {
    entry: {
      main: path.join(dirSrc, 'index'),
    },
    resolve: {
      modules: [dirNode, dirSrc, dirStyles, dirAssets],
    },
    plugins: [
      new webpack.DefinePlugin({ IS_DEV }),
      new HtmlWebpackPlugin({
        template: path.join(dirSrc, 'index.ejs'),
        title: 'Webpack Boilerplate',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              compact: true,
            },
          },
        },
        {
          test: /\.css/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: IS_DEV,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: IS_DEV,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
    },
  }
}