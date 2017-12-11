/**
 * Created by Not Igor on 30.05.2017.
 */
module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: paths,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    }
};