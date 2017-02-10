var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});


app.get('/editpost', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/page', 'editpost.html'));
});

app.get('/newpost', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/page', 'newpost.html'));
});


app.listen(1500, function() {
    console.log('Example app listening on port 1500!');
});