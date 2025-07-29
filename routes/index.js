const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const routes = fs.readdirSync(__dirname);

for (let route of routes) {
  if (route.includes('.js') && route !== 'index.js') {
    router.use(
      '/' + route.replace('.js', ''),
      require(path.join(__dirname, route))
    );
  }
}

module.exports = router;
