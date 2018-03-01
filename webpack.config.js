module.exports = {
    entry: './src/56to.js',
    output: {
        path: __dirname,
        filename: './build/build56to.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}