// Import
const sha256 = require('sha256');
/*
* Blockchain Data Structure
* @info: 
*/
function Blockchain()
{
    // All blocks that are mined are stored in the array as a chain
    this.chain = [];
    // Hold all of the new and pending transactions that are created before placed into a block
    this.pendingTransactions = [];

    /* Create new block
    * @params: nonce - Block created legitimately via Proof of Work
    * @params: previousBlockHash - Data for the new block hashed
    * @params: hash - Data from the previous block hashed
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

    // Return the last block
    Blockchain.prototype.getLastBlock = () => 
    {
        return this.chain.length - 1;
    }

    /* Create new transaction
    * @params: amount - take the amount of the transaction
    * @params: sender - senders address
    * @params: recipient - recipients address
    */
    Blockchain.prototype.createNewTransaction = (amount, sender, recipient) => 
    {
        const newTransaction = {
            amount: amount, 
            sender: sender,
            recipient: recipient
        }
        // Append new transaction to blockchain
        this.pendingTransactions.push(newTransaction);
        // Return the number of the block the transaction is added to
        return this.getLastBlock()['index'] + 1;
    }

    /* Return hashed data
    * @params: previousBlockHash -
    * @params: currentBlockHash -
    * @params: nonce - 
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
}

module.exports = Blockchain;
