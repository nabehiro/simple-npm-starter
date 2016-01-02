var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { 
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    resolve: {
      root: './src',
      extensions: ['', '.js', '.jsx']
    },
    eslint: {
        configFile: './.eslintrc.js'
    }
};

module.exports = config;