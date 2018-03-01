module.exports = {
    entry: './src/56to76.js',
    output: {
        path: __dirname,
        filename: './build/build56to76.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}