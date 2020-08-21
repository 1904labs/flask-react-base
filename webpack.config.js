const webpack = require('webpack');
const config = {
    entry:  __dirname + '/app/src/index.js',
    output: {
        path: __dirname + '/app/static/js/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
  
    module: {
        rules: [
            {
            test: /\.(js|jsx)?/,
                exclude: /node_modules/,
                use: 'babel-loader'     
            }        
        ]
    }
};
module.exports = config;

