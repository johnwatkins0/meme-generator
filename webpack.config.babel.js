import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import packageJson from './package.json';

const main = () => {
  const entry = {
    [packageJson.name]: ['./demo/index.js'],
  };
  const filename = `[name].js`;

  return {
    entry,
    output: {
      filename,
      path: path.resolve(__dirname, 'demo'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'index.html'),
        template: 'demo/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0'],
              plugins: [
                [
                  'transform-runtime',
                  {
                    helpers: false,
                    polyfill: false,
                    regenerator: true,
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: { loader: 'file-loader', options: { publicPath: '' } },
        },
      ],
    },
    devServer: {
      open: true,
      openPage: '',
    },
    devtool: 'source-maps',
  };
};

export default main;
