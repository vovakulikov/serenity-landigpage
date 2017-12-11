/**
 * Created by Not Igor on 31.05.2017.
 */
module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/(node_modules)/,/node_modules(?!\/webpack-dev-server)/],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [['es2015', {modules: false}]],
                            plugins: ['syntax-dynamic-import']
                        }
                    }]
                },

                // Loaders for other file types can go here
            ],
        },
    }
}