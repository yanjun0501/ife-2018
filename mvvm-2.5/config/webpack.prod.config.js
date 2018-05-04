const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',

  devtool: 'source-map',

  entry: {
    'main': './src/index.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 3
        },
        vendor: {
          test: /node_modules[\\/](?!san)/,
          chunks: 'all',
          name: 'vendor',
          priority: 10,
          enforce: true
        },
        san: {
          test: /[\\/]san/,
          chunks: 'all',
          name: 'san',
          priority: 10,
          enforce: true
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: path.join('static/js/[name].[hash:7].js'),
    chunkFilename: path.join('static/js/[id].[chunkhash].js'),
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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader' ] 
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
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
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
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
        })
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 40000,
            name: path.join('static/img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.join('static/fonts/[name].[hash:7].[ext]')
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
    new ExtractTextPlugin({
      filename: path.join('static/css/[name].[hash:7].css'),
      allChunks: true
    }),
    // new config.optimization.minimize(),
    new HtmlWebpackPlugin({template: path.resolve(__dirname, '../src/index.html')}),
    new webpack.HotModuleReplacementPlugin({
    }),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    }),
    new CompressionPlugin({
      test: /\.(js|css)$/,
      asset: '[path].gz[query]',
      cache: true,
      algorithm: 'gzip',
      deleteOriginalAssets: false
    })
  ]
};

module.exports = config;
