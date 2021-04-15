// Import
const sha256 = require('sha256');

/*!
* Blockchain Data Structure
*/

function Blockchain()
{
    // Arbitary params
    const nonce = 100, previousBlockHash = '0', hash = '0'; 
    // All blocks that are mined are stored in the array as a chain
    this.chain = [];
    // Hold all of the new and pending transactions that are created before placed into a block
    this.pendingTransactions = [];

    /** 
     * Create new block
     * @param {int} nonce - Block created legitimately via Proof of Work
     * @param {string} previousBlockHash - Data for the new block hashed
     * @param {string} hash - Data from the previous block hashed
    */

    Blockchain.prototype.createNewBlock = (nonce, previousBlockHash, hash) =>
    {
        const newBlock = {
            index: this.chain.length + 1, // Block number
            timestamp: Date.now(), // Block created date
            transactions: this.pendingTransactions, // All new or pending transactions inside block
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash 
        }
        // Clear out transactions for next block
        this.pendingTransactions = [];
        // Append new block to blockchain
        this.chain.push(newBlock);
        // Return new block
        return newBlock;
    }

    // Create genesis block
    this.createNewBlock(nonce, previousBlockHash, hash);

    // Return the last block number
    Blockchain.prototype.getLastBlock = () => 
    {
        return this.chain[this.chain.length - 1];
    }

    /** 
     * Create new transaction
     * @param {int} amount - take the amount of the transaction
     * @param {string} sender - senders address
     * @param {string} recipient - recipients address
    */

    Blockchain.prototype.createNewTransaction = (amount, sender, recipient) => 
    {
        const newTransaction = {
            amount: amount, 
            sender: sender,
            recipient: recipient
        };
        // Append new transaction to blockchain
        this.pendingTransactions.push(newTransaction);
        // Return the number of the block the transaction is added to
        return this.getLastBlock()['index'] + 1;
    }

    /**
     * Return hashed data
     * @param {string} previousBlockHash -
     * @param {string} currentBlockHash -
     * @param {int} nonce - 
    */

    Blockchain.prototype.hashBlock = (previousBlockHash, currentBlockHash, nonce) =>
    {
        // Change all pieces of data into a single piece of data
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockHash);
        // Create hash
        const hash = sha256(dataAsString);
        // Return hash
        return hash;
    }

    /**
     * Define Proof of Work
     * @param {string} previousBlockHash - 
     * @param {string} currentBlockHash - 
    */

   Blockchain.prototype.proofOfWork = (previousBlockHash, currentBlockHash) =>
   {
       // Define a nonce and quad value
       let nonce = 0, quadValue = '0000';
       // Hash all the data initially
       let hash = this.hashBlock(previousBlockHash, currentBlockHash, nonce);
       // Iterate over the hashBlock method until suitable hash appears
       while(hash.substring(0, 4) !== quadValue) {
           nonce++; // Different value of nonce
           hash = this.hashBlock(previousBlockHash, currentBlockHash, nonce); 
       };

       // Return nonce value that returned valid hash
       return nonce;
   }
}

module.exports = Blockchain;
