const webpack = require('webpack');
const config = {
    entry:  __dirname + '/app/src/index.js',
    output: {
        path: __dirname + '/app/static/',
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
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }       
        ]
    }
};
module.exports = config;

