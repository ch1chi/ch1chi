const path = require('path');


module.exports = {
    name: 'number-baseball-dev',
    mode: 'development', 
    devtool: 'eval', 
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    entry: {
        app: './client'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
             presets: [
                ['@babel/preset-env', {
                targets: {browsers: ['last 2 chrome version']},
                debug: true,
                }],
                '@babel/preset-react',
             ]
            },
            exclude:path.join(__dirname,'node_modules'),
        }],
    },
    plugins: [],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
};