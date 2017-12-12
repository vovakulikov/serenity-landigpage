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
                        {
                            loader: 'style-loader',
                            // options: {
                            //     modules: true,
                            //     localIdentName: '[name]__[local]___[hash:base64:5]'
                            // }
                        },
                        {
                            loader: 'css-loader',
                            // options: {
                            //     localIdentName: '[sha512:hash:base32]-[name]-[local]',
                            //     modules: true
                            // }
                        }
                    ]
                }
            ]
        }
    }
};