const express = require('express');
const bodyParser = require('body-parser');
const {caesarEncrypt, caesarDecrypt}  = require("caesar-crypt");


const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));

let displayText;

app.get('/', (req, res)=>{
  res.render('index', {displayText: displayText});
});

app.post('/', (req, res)=>{
  const userText = req.body.userText;

  if(req.body.cipher === 'encrypt'){
    displayText = caesarEncrypt(userText);
  } else if(req.body.cipher === 'decrypt') {
    displayText = caesarDecrypt(userText);
  };

  res.redirect('/');
});

app.listen(3000, ()=>{
  console.log('Server started on port 3000');
});