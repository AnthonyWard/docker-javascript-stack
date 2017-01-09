'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('mongodb').MongoClient
const databaseUrl = 'mongodb://mongo:27017/dockertest'
// Constants
const PORT = 8080;
let db;

// App
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from node express' });
});

app.get('/notes', (req, res) => {
  db.collection('notes').find().toArray((err, result) => {
    if (err) return console.log(err)

    res.json(result);
  })
})

app.post('/notes', (req, res) => {
  db.collection('notes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved record to database')
    res.json(result);
  })
});

app.delete('/notes', (req, res) => {
  db.collection('notes').deleteOne(req.body, (err, result) => {
    if (err) return console.log(err)

    res.json(result);
  })
})

mongo.connect(databaseUrl, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(PORT, () => {
    console.log('Running on http://localhost:' + PORT);
  })
});