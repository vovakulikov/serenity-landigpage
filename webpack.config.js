/**
 * Created by Not Igor on 30.05.2017.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug-loader');
const devserver = require('./webpack/devServer');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require ('./webpack/uglifyJS');
const webpack = require('webpack');
const images = require('./webpack/images');
const es6 = require('./webpack/babelES6');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index' : PATHS.src + '/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: PATHS.src + '/index.pug',
                chunks: ['index', 'common'],
                filename: 'index.html'
            }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'vendor',
            //     minChunks: function (module) {
            //         // this assumes your vendor imports exist in the node_modules directory
            //         return module.context && module.context.indexOf('node_modules') !== -1;
            //     }
            // })
        ]

    },
    es6(),
    pug(),
    images(),
    uglifyJS()
]);
module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ]);
    }
};