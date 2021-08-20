const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('path: "https://example.com/"');
});

app.get('/about', (req, res) => {
  res.send('path: "https://example.com/about"');
});

app.get('/login', (req, res) => {
  res.send('path: "https://example.com/login"');
});

module.exports = app;
