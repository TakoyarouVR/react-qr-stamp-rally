const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const StatsPlugin = require('stats-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    //mode: 'development',
    mode: 'production',
    //devtool: 'eval',
    target: 'node',
    entry: "./src/index.js",
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        }
    },
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        port:"3030",
        hot:true,
        open:true,
        historyApiFallback: true
    },
    externals: {
        express: 'express',
    },
    module: {
        rules:[
            {
                test: /\.js(x?)$/,
                loader:'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x?)$/,
                loader:'ts-loader',
                exclude: /node_modules/,
            },
            {	
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], 
                exclude: /node_modules/,
	        },
      	    {
               	test: /\.(jpg|png)$/,
        	    loader: 'url-loader',
                exclude: /node_modules/,
      	    },
            {
                test: /\.mp3$/,
        	    loader: 'file-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new StatsPlugin('stats.json', {
            chunkModules: true,
        }),
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['','.js','.ts','.tsx'],
        fallback: { 
            "buffer": false,
            "url":false, 
            "stream":false,
            "crypto": false,
            "zlib": false,
            "querystring": false,
            "http": false,
            "fs": false,
            "net": false,
            "async_hooks": false
        },
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src') 
        ]
    }
}
