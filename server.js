var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;




















app.listen(PORT, () => console.log('Petpal is Listening on localhost:' + PORT))