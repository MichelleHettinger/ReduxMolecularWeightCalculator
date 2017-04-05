const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer().listen(3000);
const app = express();
const port = 3001;
const publicPath = path.resolve(__dirname, './src/public');

app.use(express.static(publicPath));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', 'X-Pagination');
  next();
});

// proxy all assets to webpack dev server
app.all('/src/public/*', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:7777',
  });
});

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, '/src/public/index.html'))
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
