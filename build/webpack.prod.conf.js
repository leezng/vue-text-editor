var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var isPlay = !!process.env.PLAY_ENV

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    // filename: utils.assetsPath('js/[name].[chunkhash].js'),
    filename: utils.assetsPath('js/[name].js'),
    library: 'vue-text-editor',
    libraryTarget: 'umd'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    // 这个插件用来定义全局变量, 在webpack打包的时候会对这些变量做替换, 下例设置了一个 process.env 的全局变量, 因此在我们的代码中, 可以通过该变量设置只在开发环境下才执行
    // if ('development' === process.env.NODE_ENV) {
    //  开发环境下的逻辑
    // } else {
    //  生产环境下
    // }
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    // 压缩优化 JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false // 在 UglifyJs 删除没有用到的代码时不输出警告
      },
      // beautify: false, // 最紧凑的输出
      // comments: false, // 删除所有的注释
      sourceMap: true
    }),
    // https://github.com/webpack-contrib/extract-text-webpack-plugin
    // http://www.css88.com/doc/webpack2/plugins/extract-text-webpack-plugin/
    // 它会将所有的 入口chunk (entry chunks) 中的 require("style.css") 移动到分开的 css 文件. 因此, 样式不再内联到 js 里面, 但会放到一个单独的 css 包文件 (styles.css)当中. 如果你的样式文件大小较大, 这会更快, 因为样式文件会跟 js 包并行加载.
    new ExtractTextPlugin({
      // [name] chunk 的名称 [id] chunk 的数量 [contenthash] 提取文件根据内容生成的哈希
      // filename: utils.assetsPath('css/[name].[contenthash].css')
      filename: utils.assetsPath('css/[name].[contenthash].css') // (必填) 生成文件的文件名
      // allChunks {Boolean} // 向所有额外的 chunk 提取（默认只提取初始加载模块）
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    // 压缩提取出的css, 并解决 ExtractTextPlugin 分离出的css重复问题(多个文件引入同一css文件)
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }, {
        from: path.resolve(__dirname, '../README.md'),
        to: config.build.assetsRoot
      }, {
        from: path.resolve(__dirname, '../package.json'),
        to: config.build.assetsRoot
      }
    ])
  ]
})

if (isPlay) {
  webpackConfig = merge(webpackConfig, {
    entry: {
      app: './example/index.js'
    },
    output: {
      path: path.resolve(__dirname, '../example-dist'),
      filename: utils.assetsPath('js/[name].[chunkhash].js'),
      chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: process.env.NODE_ENV === 'testing'
          ? 'index.html'
          : path.resolve(__dirname, '../example-dist/index.html'),
        template: path.resolve(__dirname, '../example/index.html'),
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      })
    ]
  })
}

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
