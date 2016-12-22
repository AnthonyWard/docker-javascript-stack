'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'Hello from the backend' }));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);