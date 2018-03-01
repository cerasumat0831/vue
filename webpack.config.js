module.exports = {
    entry: './src/project_1.js',
    output: {
        path: __dirname,
        filename: './build/buildproject_1.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}