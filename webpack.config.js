HOST_NAME = 'garrettswann.me';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        entry: {
            main: ['@babel/polyfill', './src/app.js']
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: ['babel-loader']
                },
                {
                    test: /\.png$/,
                    loader: 'file-loader'
                }
            ]
        },
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules']
        },
        output: {
            filename: '[name].js',
            publicPath: '/',
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            allowedHosts: [
                '.' + HOST_NAME,
            ].filter(host => host != undefined),
            historyApiFallback: true,
            public: HOST_NAME || undefined
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: env && env.appTitle? env.appTitle: 'Undefined Title',
                template: path.resolve(__dirname, 'public/index.html'),
                favicon: path.resolve(__dirname, 'public/favicon.ico'),
                /* Injected explicitely with: 
                 * <script type="text/javascript" src="<%= htmlWebpackPlugin.files.chunks.main.entry %>"></script> 
                */
                inject: false
            }),
        ]
    };
}
