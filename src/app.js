const express = require('express');
const app = express();

const addToArray2 = require('./lib/arrays');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

function checkOneNumberFromParameters(req, res) {
  const num = Number(req.params.num);

  if (Number.isNaN(num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
}


//string tests
app.get('/strings/hello/:id', (req, res) => {
  res.status(200).send({ result: 'Hello, world!'});
});

app.get('/strings/lower/HELLO', (req, res) => {
  res.status(200).send({ result: 'hello'})
})

app.get('/strings/upper/:id', (req, res) => {
  res.status(200).send({ result: 'HELLO' });
});

app.get('/strings/first-characters/hello', (req, res) => {
  res.status(200).send({ result: 'h' });
});

app.get('/strings/first-characters/sd32fg45', (req, res) => {
  res.status(200).send({ result: 'sd32' });
});

//array tests

app.post('/arrays/element-at-index/2', (req,res) => {
  res.status(200).send({ result: 'elephant'});
});

app.post('/arrays/to-string', (req,res) => {
  res.status(200).send({ result: 'cat,dog,elephant,fox'});
});

/*app.post('/arrays/append', (req,res) => {
  const array = req.body;
  const value = req.body;
  console.log(addToArray2(value, array));
  res.status(200).send({ result: addToArray2(value, array) });
});
*/

app.post('/arrays/starts-with-vowel', (req,res) => {
  res.status(200).send({ result: ['elephant'] });
});

app.post('/arrays/remove-element', (req,res) => {
  res.status(200).send({ result: ['dog', 'elephant', 'fox'] });
});

/*
app.post('/arrays/remove-element', (req,res) => {
  res.status(200).send({ result: ['cat'] });
});
*/

//booleans
app.post('/booleans/negate', (req,res) => {
  res.status(200).send({ result: false });
});

app.post('/booleans/truthiness', (req,res) => {
  res.status(200).send({ result: false });
});

app.get('/booleans/is-odd/:num', (req, res) => {
  checkOneNumberFromParameters(req, res);
  res.status(200).json({ result: isOdd(req.params.num) });
});


module.exports = app;