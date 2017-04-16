var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/client.js',
    output: {
        filename: 'client-bundle.js',
        path: path.resolve(__dirname, 'build/statics')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
