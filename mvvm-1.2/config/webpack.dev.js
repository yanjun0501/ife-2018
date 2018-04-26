const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',

  devtool: 'source-map',

  entry: {
    'main': './src/index.js'
  },

  output: {
    path: path.resolve(__dirname,  '../dist'),
    filename: '[name].min.js',
    library: '[name]',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ "eslint-loader"]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['env']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, './config/postcss.config.js')
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, './config/postcss.config.js')
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            'limit': 40000
          }
        }
      },
      {
        test: /\.san$/,
        use: 'san-loader'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules'
    ]
  },

  plugins: [
    // new ExtractTextPlugin({
    //   filename: '[name].min.css',
    //   allChunks: true
    // }),
    // // new config.optimization.minimize(),
    // new HtmlWebpackPlugin({template: './index.html'}),
    new webpack.HotModuleReplacementPlugin({
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    // new UglifyJsPlugin({
    //   test: /\.js($|\?)/i,
    //   sourceMap: true
    // })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    // contentBase:  'dist',
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
    watchOptions: {
        ignored: /node_modules/
    }
},
};

module.exports = config;