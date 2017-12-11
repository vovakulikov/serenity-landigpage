/**
 * Created by Not Igor on 31.05.2017.
 */
const webpack = require('webpack');
module.exports = function () {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                },
                exclude: /node_modules(?!\/webpack-dev-server)/,
            })
        ]
    }
}