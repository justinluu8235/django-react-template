const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        'main/index': './frontend/apps/main/index.js',
    },
    output: {
        path: path.resolve(__dirname, './frontend/dist'),
        publicPath: "/static/frontend/dist/",
        filename: '[name].js'
    },
    module: {
        // configuration regarding modules
        rules: [
            {
                // regex test for js and jsx files
                test: /\.(js|jsx|mjs)?$/,
                // don't look in any node_modules/ or bower_components/ folders
                exclude:  /(node_modules|bower_components)/,
                // for matching files, use the babel-loader
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env", "@babel/preset-react"]}
                },
            },
        ],
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
    }
};
