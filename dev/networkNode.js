// Import
const express = require('express');
const Blockchain = require('./blockchain');

// Instantiate functions
const app = express();
const bitcoin = new Blockchain();

// Declare port number
const portNumber = 3001;
console.log(client.sendRequest('example.com', '80', '/'))

/**
 * GET: Return entire blockchain
 */
app.get('/blockchain', (request, response) => {
    response.send(bitcoin);
});

/**
 * POST: New Transaction
 */
app.post('/transaction', (request, response) => {
    // Capture the request body
    let requestBody = [];
    // Upon request
    request.on('data', (chunk) => {
        requestBody.push(chunk);
    }).on('end', () => {
        requestBody = JSON.parse(Buffer.concat(requestBody).toString());
        const blockIndex = bitcoin.createNewTransaction(requestBody.amount,
            requestBody.sender, requestBody.recipient)
            console.log(blockIndex);
        response.json({ note: `Transaction will be added in block ${blockIndex}. `});
    });
});

/**
 * GET: Mine new block
 */
app.get('/mine', (request, response) => {
    const newBlock = bitcoin.createNewBlock();
});

/**
 * Create server and listen to a communitcation port 
 * @listens portNumber
 */
app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}`);
});