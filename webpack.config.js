module.exports = {
    entry: './src/31to.js',
    output: {
        path: __dirname,
        filename: './build/build31to.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}