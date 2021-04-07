// Import
var express = require('express');
// Instantiate express function
var app = express();
// Declare port number
var portNumber = 3001;

/**
 * GET: Return entire blockchain
 * @returns {Array}
 */

app.get('/blockchain', (request, response) => {

});

/**
 * POST: New Transaction
 * @returns {Array}  
 */

app.post('/transaction', (request, response) => {
    console.log(req.body);
    response.send(`The amount of the transaction is ${req.body.amount} bitcoin`);
});

/**
 * GET: Mine new block
 * @returns {Array}
 */
app.get('/mine', (request, response) => {

});

/**
 * Create server and listen to a communitcation port 
 * @listens portNumber
 */
app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}`);
    
});