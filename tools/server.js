var fs = require('fs');
var path = require('path');
var http = require('http');
var https = require('https');

/* self-signed certificate and key */
var privateKey = fs.readFileSync(path.join(__dirname, '../ssl/key.pem'), 'utf8');  
var certificate  = fs.readFileSync(path.join(__dirname, '../ssl/cert.pem'), 'utf8');
var credentials = {key: privateKey, cert: certificate}; 

var express = require('express');
var app = express();

/* static resources */
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use('/cyber/mysamsung', express.static(path.join(__dirname, '../cyber/mysamsung')));

/* samsung.com landing page */
app.get('/cyber/mysamsung/index', function(req, res) {
    res.sendFile(path.join(__dirname, '../cyber/mysamsung', 'index.html'));
});

/* http and https servers */
http.createServer(app).listen(80);
console.log('http listening on port 80');

https.createServer(credentials, app).listen(443);
console.log('https listening on port 443');
