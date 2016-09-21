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
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            // https://github.com/babel/babel-loader#options
                            cacheDirectory: true,
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            // kind of a copy of your webpack config
            noInfo: true
        }
    });
};