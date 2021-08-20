const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('path: "https://example.com/"');
});

router.get('/about', (req, res) => {
  res.send('path: "https://example.com/about"');
});

router.get('/login', (req, res) => {
  res.send('path: "https://example.com/login"');
});

module.exports = router;
