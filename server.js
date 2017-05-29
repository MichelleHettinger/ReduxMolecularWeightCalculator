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

// A dependency on a Mongoose model for articles.
const User = require('./src/models/user.js');

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
 
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './src/public/index.html'));
});

// Find user given email
app.get('/api/saved/', function(req, res){

  const email = req.param('email');

  User.findOne({"users.email": email}, 'email password').exec(function(err, user){
    if (err){
      console.log(err);
    }
    else {
      console.log(user);
      res.send(user);
    }
  })
});

app.post('/api/saved', function(req, res){
  const newUser = new User({
    email: "person@gmail.com",
    password: "1234",
    date: Date.now(),
  });

  newUser.save(function(err, doc) {
    // send an error to the browser
    if (err) {
      res.send(err);
    } 
    // or send the doc to our browser
    else {
      console.log("added to database");
    }
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
