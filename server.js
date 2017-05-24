const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const httpProxy = require('http-proxy');
const mongoose = require('mongoose');
const proxy = httpProxy.createProxyServer().listen(3000);
const app = express();
const port = process.env.PORT || 3001;
const publicPath = path.resolve(__dirname, './src/public');

// MongoDB Connection
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/MolecWeightMongo');

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// Logging and public Path
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(publicPath));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', 'X-Pagination');
  next();
});

// Proxy all assets to webpack dev server
app.all('/src/assets/*', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:7777',
  });
});

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, './src/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
