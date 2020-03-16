'use strict'

// bring in an express library to use as the server
const express = require('express');

// this library allows me to access variables in my .env file
require('dotenv').config();

const app = express();

const port = process.env.PORT;

//middleware
app.use(express.static('./public'));

// app.get('/', function (request, response) {
//   response.send('Hello World')
// })

// app.get('/bananas', (request, resposne) => {
//   response.send('Monkey');
// })

app.listen(port, () => {
  console.log(`listening on ${port}`);
})