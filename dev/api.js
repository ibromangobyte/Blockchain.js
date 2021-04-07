// Import
var express = require('express');
// Instantiate express function
var app = express();
// Declare port number
var portNumber = 3001;

// GET: Entire blockchain
app.get('/blockchain', (request, response) => {

});

// POST: A new transaction
app.post('/transaction', (request, response) => {
    console.log(req.body);
    response.send(`The amount of the transaction is ${req.body.amount} bitcoin`);
});

// GET: Mine a new block
app.get('/mine', (request, response) => {

});

// Listen to port
app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}`);
    
});