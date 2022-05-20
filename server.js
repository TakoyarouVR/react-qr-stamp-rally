var port = 3000;
fs = require('fs');
const path = require('path');
express = require('express');
http = require('http');
https = require('https');
var server = express();
http.createServer(server).listen(3001)
server.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'app/index.html'));
});
server.get('/collection', function(req, res){
    res.sendFile(path.resolve(__dirname, 'app/index.html'));
});
var sslOptions = {
    key: fs.readFileAsync('key.pem'),
    cert: fs.readFileAsync('cert.pem')
}

https.createServer(sslOptions, server).listen(3000)
