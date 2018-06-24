/**
 * project WizBattle
 */
import opn from 'opn';
import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import logger from 'morgan';
import config from '../webpack.config';
import SC from '../configs/server-conf';
import paths from '../configs/paths';
import freePort from './free-port'; // helper function to find unused port
import data from './routes/data';
//var cookieParser = require('cookie-parser');
const compiler = webpack(config);
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://evg-msk:moskv1980@ds263660.mlab.com:63660/wiz-battles');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('Connected correctly to server');
});

// Wrap for the 'App.listen' which takes unused port from 'freePort'
const listen = (port) =>
    app.listen(port, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        const url = `${SC.protocol}${SC.host}:${port}`;
        opn(url);
        console.log(`Listening at ${url}`);
    });

app.use(devMiddleware(compiler, {
    stats: 'minimal',
    publicPath: '/',
}));

app.use(hotMiddleware(compiler, {
    path: '/__webpack_hmr',
}));

app.use(bodyParser.json());
//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use("/", user);

app.post('/users', (req, res) => {
    res.sendFile(paths.usersPath);
});

app.post('/sessions', (req, res) => {
    res.sendFile(paths.sessionsPath);
});


app.get('*', (req, res) => {
    res.sendFile(paths.template);
});

freePort(SC.port).then(listen, err => console.log(err));

