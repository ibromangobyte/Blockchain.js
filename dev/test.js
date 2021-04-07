const Blockchain = require('./blockchain');

/*
* Testing the Blockchain constructor function
*/
// Make an instance of the Blockchain constructor function
const bitcoin = new Blockchain();
// Write to console
console.log(bitcoin); 

/*
* Testing the createNewBlock method
*/
// Create new block
bitcoin.createNewBlock(2389, 'OIUOERDENJE', '434543xdsfe43');
// Write to console
console.log(bitcoin); 
// Create another block
bitcoin.createNewBlock(111, '9989283943', 'UFISOEJFNFE');
bitcoin.createNewBlock(2899, '2NINFSENNEN', '4SEFNE9234F');
// Write to console
console.log(bitcoin);

/*
* Testing the createNewTransaction method
*/
// Create a new transaction
bitcoin.createNewTransaction(100, 'AELEFNCSECESS', 'JSEJFNESJSEI34');
// Write to console
console.log(bitcoin);
// Get the transaction to appear in the blockchain
bitcoin.createNewBlock(5467889, 'IESNFGIESSE', 'SEGES34342SEF');
// Write to console and inspect the new block
console.log(bitcoin.chain[3]);
// Execute three more transactions
bitcoin.createNewTransaction(500, 'SEINGHUSEGSES', '999999SJSEI34');
bitcoin.createNewTransaction(800, 'AELEFNCSEFSES', '5554FNESJSEI34');
bitcoin.createNewTransaction(5000, '48593SEFSESS', '345345NESJSEI34');
// Write to console
console.log(bitcoin);
// Get the transaction to appear in the blockchain
bitcoin.createNewBlock(444444, 'IESNFGIESSE', 'SEGES34342SEF');
// Write to console
console.log(bitcoin.chain[4]);

/*
* Testing the hashBlock method
*/
// Define previous hash block
const previousBlockHash = '87765DA6CCF0668234838292922';
const currentBlockHash = [
    {
        amount: 10,
        sender: 'BAIWNFCIKENSE',
        recipient: '3345ADFSEFSEGF'
    }
];
const nonce = 100;
// Call the hasbBlock method
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockHash, nonce));