
const paths = require('./configs/paths');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextWebpackPlugin({
    filename: 'css/[name].css',
});
const env = !process.env['NODE_ENV'];

// common plugins
const plugins = [
    new HtmlWebpackPlugin({
        template: paths.template,
    }),
];

if (env) { // prod config
    plugins.push(extractCss);
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify("production"),
        },
    }));

} else { // dev-config
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify("development"),
        },
    }));
}

const lint = process.env['NODE_ENV'] !== 'lint' ? {} : {
    test: /\.jsx?$/,
    enforce: 'pre',
    use: [
        {
            options: {
                baseConfig: '.eslintrc.js',
            },
            loader: "eslint-loader",
        },
    ],
    include: paths.srcPath,
    exclude: paths.nodePath,
};

// postcss
const postcssRules = {
    loader: 'postcss-loader',
    options: {
        sourceMap: true,
        ident: 'postcss',
        plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                ],
                flexbox: 'no-2009',
            }),
        ],
    },
};
const scssProd = {
    test: /\.scss$/,
    use: extractCss.extract(
        {
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true,
                        importLoaders: 2,
                    },
                },
                postcssRules,
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        }),
};

const scssDev = {
    test: /\.scss$/,
    use: [
        'style-loader',
        'css-loader',
        postcssRules,
        'sass-loader',
    ],
};

const scssRules = env ? scssProd : scssDev;

// css,
const cssDev = {
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader',
        postcssRules,
    ],
};

const cssProd = {
    test: /\.css$/,
    loader: extractCss.extract({ fallback: 'style-loader', use: ['css-loader?sourceMap'] }),
};

const cssRules = env ? cssProd : cssDev;

// entry
const entry = env ? [paths.indexJsPath]
    : ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', paths.indexJsPath];

// devtool
const devtool = env ? 'source-map' : 'cheap-module-eval-source-map';

// webpack config
module.exports = {
    entry,
    output: {
        path: paths.prodPath,
        filename: 'js/[name].js',
        publicPath: paths.publicPath,
        sourceMapFilename: '[file].map',
    },
    devtool,
    stats: {
        modules: false,
        chunks: false,
        children: false,
    },
    module: {
        rules: [
            lint,
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: paths.srcPath,
                exclude: paths.nodePath,
            },
            scssRules,
            {
                test: /\.mp3$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'sounds/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.(?:png|svg|jpg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'images/[name].[hash:8].[ext]',
                },
            },
        ],
    },
    plugins,
};
