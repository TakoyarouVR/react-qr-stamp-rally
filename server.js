var port = 3000;
fs = require('fs');
const path = require('path');
express = require('express');
https = require('https');
var server = express();
server.use(express.static('D:\\\\Documents\\react-qr-stamp-rally\\app'));
server.get('/', function(req, res){
    res.sendFile('D:\\\\Documents\\react-qr-stamp-rally\\app\\index.html');
});
server.get('/collection', function(req, res){
    res.sendFile('D:\\\\Documents\\react-qr-stamp-rally\\app\\index.html');
});
var sslOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

https.createServer(sslOptions, server).listen(port)
