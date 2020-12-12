/* eslint-disable import/no-extraneous-dependencies */

import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import * as path from 'path';

import HtmlWebPackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const sourceDirectory = path.resolve(__dirname, 'source/');
const outputDirectory = path.resolve(__dirname, 'output/');

const entryPointPath = path.resolve(sourceDirectory, 'index.tsx');

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(`${sourceDirectory}/index.html`),
  filename: path.resolve(`${outputDirectory}/index.html`),
});

const terserPlugin = new TerserPlugin({
  cache: true,
});

const rules: webpack.RuleSetRule[] = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: ['ts-loader'],
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['source-map-loader'],
    enforce: 'pre',
  },
  {
    test: /\.s?css$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(jpg|ttf|svg|woff2?|eot|png|mp4|mp3|wav)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/',
        publicPath: 'assets',
      },
    },
  },
];

const devServer: webpackDevServer.Configuration = {
  contentBase: outputDirectory,
  historyApiFallback: true,
  port: 8000,
  writeToDisk: true,
};

const config: webpack.Configuration = {
  entry: entryPointPath,
  output: {
    filename: 'app.js',
    path: outputDirectory,
  },
  module: {
    rules,
  },
  devServer,
  plugins: [htmlPlugin],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx', '.jsx'],
  },
  optimization: {
    minimizer: [terserPlugin],
  },
};

export default config;
