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
    resolve: {
      root: './src',
      extensions: ['', '.js', '.jsx']
    },
    eslint: {
        configFile: './.eslintrc.js'
    }
};

module.exports = config;