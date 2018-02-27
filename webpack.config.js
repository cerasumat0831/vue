module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: './build/build.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}