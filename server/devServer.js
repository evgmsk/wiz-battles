import fs from 'fs';
import opn from 'opn';
import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import parser from 'body-parser';
import SC from '../configs/server-conf';
import paths from '../configs/paths';
import config from '../webpack.config';
import freePort from './free-port'; // helper function to find unused port

//console.log(data)
//const shapes = JSON.parse(data);

const compiler = webpack(config);
const app = express();

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
app.use(parser.json());

app.post('/users', (req, res) => {
    res.sendFile(paths.usersPath);
});

app.get('*', (req, res) => {
    res.sendFile(paths.template);
});

freePort(SC.port).then(listen, err => console.log(err));
