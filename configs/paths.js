/**
 * project WizBattle
 */
const path = require('path');

const paths = {
    prodPath: path.join(__dirname, '../wiz-battles'),
    prodHtmlPath: path.join(__dirname, '../wiz-battles/index.html'),
    template: path.join(__dirname, '../public/index.html'),
    favicon:  path.join(__dirname, '../public/favicon.ico'),
    publicPath: '/',
    srcPath: path.join(__dirname, '../src'),
    nodePath: path.join(__dirname, '../node-modules'),
    indexJsPath: path.join(__dirname, '../src/index.js'),
    vocabularyPath: path.join(__dirname, '../src/data/vocabulary.json'),
    dataPath: path.join(__dirname, '../Data/shapes.json'),
};

module.exports = paths;

