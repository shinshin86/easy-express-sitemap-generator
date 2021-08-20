const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('path: "https://example.com/users"');
});

router.get('/new', (req, res) => {
  res.send('path: "https://example.com/users/new"');
});

module.exports = router;
