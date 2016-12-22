'use strict';

const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;

// App
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.json({ message: 'Hello from the backend' });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);