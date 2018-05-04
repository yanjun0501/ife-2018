const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',

  devtool: 'source-map',

  entry: {
    'main': './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: path.join('js/[name].[hash:7].js'),
    chunkFilename: path.join('js/[id].[chunkhash].js'),
    library: '[name]',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'eslint-loader']
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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 40000,
            name: path.join('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.join('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.san$/,
        use: 'san-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
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
    new CompressionPlugin({
      test: /\.(js|css)$/,
      asset: '[path].gz[query]',
      cache: true,
      algorithm: 'gzip',
      deleteOriginalAssets: false
    })
    // new UglifyJsPlugin({
    //   test: /\.js($|\?)/i,
    //   sourceMap: true
    // })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // contentBase:  'dist',
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
};

module.exports = config;
