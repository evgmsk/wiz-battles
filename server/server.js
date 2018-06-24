/**
 * match-match-game
 */
import opn from 'opn';
import express from 'express';
import SC from '../configs/server-conf';
import paths from '../configs/paths';
import freePort from './free-port';

const app = express();

// Wrap for the 'App.listen' which takes unused por from 'freePort'
const listen = (port) =>
    app.listen(port, function(err) {
        if(err) {
            console.log(err);
            return;
        }
        let url = `${SC.protocol}${SC.host}:${port}`;
        opn(url);
        console.log(`Listening at ${url}`);
    });

app.use(express.static(paths.prodPath));

app.post('/vocabulary', function(req, res) {
    res.sendFile(paths.vocabularyPath);
});

app.post('/sessions', function(req, res) {
    res.sendFile(paths.vocabularyPath);
});

app.get('*', function(req, res) {
    res.sendFile(paths.prodHtmlPath);
});

freePort(SC.port).then(listen, err => console.log(err));

/*

 <script src="https://www.gstatic.com/firebasejs/5.1.0/firebase.js"></script>
 <script>
 // Initialize Firebase
 var config = {
 apiKey: "AIzaSyABwdRySdEE3RoQ0Rx4z9ngB44K4N3K5Ww",
 authDomain: "my-snf.firebaseapp.com",
 databaseURL: "https://my-snf.firebaseio.com",
 projectId: "my-snf",
 storageBucket: "my-snf.appspot.com",
 messagingSenderId: "297714873021"
 };

 </script>
 */