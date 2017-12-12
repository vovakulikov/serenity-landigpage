/**
 * Created by Not Igor on 30.05.2017.
 */
module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        'sass-loader'
                    ]
                }
            ]
        }
    }
};