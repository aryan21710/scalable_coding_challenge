const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cones = require('./cones.json');

module.exports = {
    entry: ['babel-polyfill', './src/index'],
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{ from: 'public/index.html' }])
    ],
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, './public'),
        hot: true,
        open: true,
        historyApiFallback: true,
        before: function(app) {
            app.get('/api/cones', function(req, res) {
                res.json(cones);
            });
        }
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
	  },
	  {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
	  },
	  {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|jpg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader'
            },
            {
                test: /.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        alias: {
        // '@ag-grid-community/core/modules': path.resolve('./node_modules/@ag-grid-community/core/dist/es2015/modules'),
            '@ag-grid-community/core': path.resolve('./node_modules/@ag-grid-community/core'),
            // 'ag-grid-enterprise': path.resolve('./node_modules/ag-grid-enterprise'),
            'react': path.resolve('./node_modules/react')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
};
