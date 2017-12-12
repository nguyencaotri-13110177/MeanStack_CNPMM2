var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var mongoose = require('mongoose');
const app = express();
const http = require('http');
const server = http.createServer(app);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mean-stack')
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

var dienthoai = require('./routes/dienthoai');
var hangdienthoai = require('./routes/hangdienthoai');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/dienthoai', dienthoai);
app.use('/hangdienthoai', hangdienthoai);
//parser cookie
app.use(cookieParser());

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// //socket

// io.on("connection",function(socket){
//   // console.log(socket)
//   console.log("connect"+socket.id);
//   socket.on("disconnect",function(){
//     console.log("disconnect"+socket.id);
//   });
// });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));