var port = 3000;
const path = require('path');
express = require('express');
app = express().use(express.static(path.resolve(__dirname, './')));
http = require('http').Server(app);
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './app/index.html'));
});
app.get('/collection', function(req, res){
    res.sendFile(path.resolve(__dirname, './app/index.html'));
});
http.listen(port, function(){
    console.log("Node server listening on port " + port);
});