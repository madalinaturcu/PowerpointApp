module.exports = {
    entry: [
        // "webpack-dev-server/client?http://localhost:8082",
        "./app/entry.js",
        "./app/main.ts",
        "./app/style.scss"
        ],
    output: {
        path: "./app/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style!css" 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, 
            {
                test: /\.ts$/, 
                loader: "ts-loader" 
            }
        ]

    }
};