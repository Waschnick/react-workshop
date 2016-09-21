// We put two lines of JavaScript in a ./tests.webpack.js file to help Karma and Webpack play together
// This tells Webpack to consider anything with a -test suffix to be part of the test suite.
var context = require.context('./', true, /test\.js?$/);
context.keys().forEach(context);