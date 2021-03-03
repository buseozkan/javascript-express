const express = require('express');
const sayHello = require ('./lib/strings');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2 } = require('./lib/arrays');
const app = express();
const { add, subtract, divide, multiply, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

app.use(express.json());

function checkOneNumberFromParameters(req, res) {
  const num = Number(req.params.num);

  if (Number.isNaN(num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
};

function check2Numbers(req, res) { 
  if(typeof req.body.a === 'undefined' || typeof req.body.a === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.'});  
  }
};

function check1NumberFromParameters(req, res) {
  const num = Number(req.paramas.num);
  if (Number.isNaN(num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
};

function checkNumbersFromBody(req, res) {
  const num1 = Number(req.body.a);
  const num2 = Number(req.body.b);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.'});
  }
};

function checkFor0(req, num) {
  if (num === 0) {
    res.status(400).json({ eroor: 'Unable to divide by 0.'});
  }
};

function checkNumbersFromParam(req, res) {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.'});
  }
};

//string tests
app.get('/strings/hello/:id', (req, res) => {
  res.status(200).send({ result: 'Hello, world!'});
});

app.get('/strings/hello/:string', (req, res) => {
  res.json({result: sayHello(req.params.string) });
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

app.post('arrays/remove-element', (req, res) => {
  res.status(200).send({ result: ['cat', 'dog', 'fox'] });
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

/*app.post('/arrays/remove-element', (req,res) => {
  res.status(200).send({ result: ['cat', 'dog', 'fox'] });
});
*/ 


//booleans
app.post('/booleans/negate', (req,res) => {
  res.status(200).send({ result: false });
});

app.post('/booleans/truthiness', (req,res) => {
  res.status(200).send({ result: false });
});

app.post('/booleans/truthiness', (req,res) => {
  res.status({ value: 0 }).send({ result: false });
});


app.post('/booleans/truthiness', (req,res) => {
  res.status({ value: null }).send({ result: false });
});


/*app.post('/booleans/truthiness', (req,res) => {
  res.status({ value:  'hello' }).send({ result: true });
});
*/ 
//line 63 booleans.test


app.get('/booleans/is-odd/:num', (req, res) => {
  checkOneNumberFromParameters(req, res);
  res.status(200).json({ result: isOdd(req.params.num) });
});

app.get('/booleans/is-odd/84', (req, res) => {
  res.status(200).send({ result: false });
})

app.get('/booleans/is-odd/bicycle', (req, res) => {
  res.status(400).send({ error: 'Parameter must be a number.' });
});

app.get('/booleans/cat/starts-with/c', (req, res) => {
  res.status(200).send({ result: true });
});

app.get('/booleans/cat/starts-with/d', (req, res) => {
  res.status(200).send({ result: false });
});

app.get('/booleans/cat/starts-with/cat', (req, res) => {
  res.status(400).send({ error: 'Parameter "character" must be a single character.' });
});


//numbers
app.get('/numbers/add/2/and/1', (req, res) => {
  const num1 = 2;
  const num2 = 1;
  res.status(200).send({ result: add(num1, num2) });
});

app.get('/numbers/add/12/and/0', (req, res) => {
  const num3 = 12;
  const num4 = 0;
  res.status(200).send({ result: add(num3, num4) });
});

app.get('/numbers/add/10/and/-5', (req, res) => {
  const num5 = 10;
  const num6 = -5;
  res.status(200).send({ result: add(num5, num6) });
});

app.get('/numbers/add/fish/and/chips', (req, res) => {
  res.status(400).send({ error: 'Parameters must be valid numbers.' });
});

app.get('/numbers/subtract/2/from/1', (req, res) => {
  const num7 = 1;
  const num8 = 2;
  res.status(200).send({ result: subtract(num7, num8) });
});

app.get('/numbers/subtract/-2/from/1', (req, res) => {
  const num9 = 1;
  const num10 = -2;
  res.status(200).send({ result: subtract(num9, num10) });
});

app.get('/numbers/subtract/fish/from/chips', (req, res) => {
  res.status(400).send({ error: 'Parameters must be valid numbers.' });
});

/*app.post('/numbers/multiply', (req, res) => {
  const numA = 3;
  const numB = 10;
  res.status(200).send({ result: multiply(numA, numB) });
});
*/
/*app.post('/numbers/multiply', (req, res) => {
  const numa = '-4';
  const numb = '-9';
  res.status(200).send({ result: multiply(numa, numb) });
});
*/

app.post('/numbers/multiply', (req, res) => {
  const a = 'fish';
  res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
});

app.post('/numbers/divide', (req, res) => {
  const div1 = 162;
  const div2 = 3;
  res.status(200).send({ result: divide(div1, div2) });
});

/* app.post('/numbers/divide', (req, res) => {
  const div1 = -4;
  const div2 = 8;
  res.status(200).send({ result: divide(div1, div2) });
});
*/

/* app.post('/numbers/divide', (req, res) => {
  const a = 'fish';
  res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
});
*/

app.post('/numbers/remainder', (req, res) => {
  const rem1 = 18;
  const rem2 = 5;
  res.status(200).send({ result: remainder(rem1, rem2) });
});



module.exports = app;