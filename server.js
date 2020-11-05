const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(express.json()) //inserting a piece of middleware, using global mw with server.use
server.use(logger)
server.use(helmet()) // the req and the res obj travel through them. Helmet make res has better headers
server.use(morgan('dev'))

server.use((req, res, next)=>{ //should always place after morgan
  console.log('--experimenting middleware--');
  next()
});


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!!</h2>`);
});

//custom middleware
function logger(req, res, next) {
  const timestamp = new Date(Date.now()).toLocaleString()
  console.log(`Method : ${req.method} , URL : ${req.url} , Timestamp : ${timestamp}`)
  next()
}

module.exports = server;
