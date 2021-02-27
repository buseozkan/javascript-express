/*const express = require('express');

const app = express();

module.exports = app;
*/

const express = require('express');
const app = express();


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



module.exports = app;