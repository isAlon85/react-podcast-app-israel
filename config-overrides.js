// config-overrides.js
const { override, addWebpackAlias, addBundleVisualizer, addWebpackPlugin } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const addCustomPlugins = () => (config) => {
  if (config.mode === 'production') {
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin({}),
    ];
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      })
    );
  }
  return config;
};

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addBundleVisualizer({}, true),
  addCustomPlugins()
);