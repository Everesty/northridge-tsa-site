const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function webpackConfig(env) {
  // Determine the environment (production or development).
  const nodeEnv = env && env.production ? 'production' : 'development';
  const isProduction = nodeEnv === 'production';

  // The plugin list depends on the environment we're building for, so it's stored as a separate
  // variable until we finally export the configuration.
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      fileName: 'vendor.bundle.js'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Northridge TSA',
      // TODO favicon: 'something',

      template: path.resolve(__dirname, 'app/index.ejs'),

      minify: isProduction
        ? {
          collapseWhitespace: true,
          collapseInlineWhitespace: true,
          removeComments: true,
          useShortDoctype: true
        }
        : false,
      showErrors: !isProduction
    })
  ];

  if (isProduction) {
    // Minimize and extract CSS if we're building for production.
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true, // same.
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      }),
      new CopyWebpackPlugin([
        // If you don't see a "static" directory in "dist" then run `npm run build` instead of just
        // `webpack`; the environment _must_ be set for this plugin to be added
        { from: 'app/static/', to: 'static/' }
      ]),
      new ExtractTextPlugin('styles.css')
    );
  } else {
    // Hot reloading if we're building for development.
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    devtool: isProduction ? 'source-map' : 'eval',
    context: __dirname,

    entry: {
      app: ['react-hot-loader/patch', path.resolve(__dirname, 'app/main.jsx')],
      vendor: ['babel-polyfill', 'react']
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: '[name].bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['react-hot-loader/babel']
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: isProduction
            ? ExtractTextPlugin.extract({
              use: ['css-loader', 'sass-loader'],
              fallback: 'style-loader'
            })
            : ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },

    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules/'),
        path.resolve(__dirname, 'app/')
      ]
    },

    plugins,

    devServer: {
      contentBase: path.resolve(__dirname, 'app/'),
      historyApiFallback: true,
      port: 8080,
      compress: isProduction,
      inline: !isProduction,
      hot: !isProduction,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true
      }
    }
  };
};
