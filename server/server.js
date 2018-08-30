const path = require('path');
const express = require('express');
const app = express();
const router = require('./routes/index.js');

//	db
const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:iZAr8bbC@ds011492.mlab.com:11492/latamine-admin')
var db = mongoose.connection;
db.on('error', (err) => { console.log(err) })
db.once('open', () => {	console.log('db connected!') })

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// app.use(bodyParser());
// app.use(cookieParser());
app.use('/', router)

app.set('jwtsecret', 'foobar')

let server_port = process.env.YOUR_PORT || process.env.PORT || 80;
let server_host = process.env.YOUR_HOST || '0.0.0.0';

const server = app.listen(server_port, server_host, function () {
  console.log(`Listening on ${server_host}:${server_port}`);
});