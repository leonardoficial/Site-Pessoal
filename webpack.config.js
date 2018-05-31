const path = require("path");

const ProgressBarPlugin = require('progress-bar-webpack-plugin'); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractTextPluginConfig = new ExtractTextPlugin("styles.css");

module.exports = {
  mode: "development",
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  entry: ["./src/main.jsx"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
    // Javascript
      {
        test: /\.jsx?$/,
        include: /src/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            "react-html-attrs",
            "transform-decorators-legacy",
            "transform-class-properties",
            "transform-es2015-template-literals"
          ]
        }
      },
    // Stylesheets
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader!postcss-loader")
      },
    // Raw text
      {
        test: /\.txt$/,
        loader: "raw-loader"
      },
    // Font
      { 
        test: /\.svg$/, 
        loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]'
      }, 
      { 
        test: /\.woff$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' 
      },
      { 
        test: /\.woff2$/, 
        loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
      }, 
      { 
        test: /\.[ot]tf$/, 
        loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' 
      }, 
      { 
        test: /\.eot$/, 
        loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' 
      }
    ]
  },
  devServer: {
    inline: true,
    stats: "errors-only",
    contentBase: "./public"
  },
  plugins: [
    extractTextPluginConfig,
    new ProgressBarPlugin()
  ]
}



