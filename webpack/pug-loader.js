/**
 * Created by Not Igor on 30.05.2017.
 */
module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            ]
        }
    }
};