// We used browsers to say that tests should run in Chrome, frameworks to specify which testing framework we’re using, and singleRun to make tests run only once by default.
// You can keep karma running in the background with karma start --no-single-run
var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        basePath: '../',
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'test/tests.webpack.js'
        ],
        preprocessors: {
            'test/tests.webpack.js': ['webpack']
        },
        reporters: ['dots'],
        logLevel: config.LOG_DEBUG,

        // kind of a copy of your webpack config
        // You could also require this from the normal webpack config!
        webpack: {
            entry: './app/index.js',
            output: {
                path: './dist',
                filename: 'bundle.js',
            },
            module: {
                loaders: [
                    {test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/, query: {presets: ['es2015', 'react']}},
                    {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
                    {test: /\.html$/, loaders: ['file?name=[path][name].[ext]?[hash]&context=./app/']}
                ]
            }
        }
    });
};