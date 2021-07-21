const Block = require('./block');

class Blockchain{
    constructor(){
        this.block = Block;
        this.chain = [this.block.genesis()];
    }

    addBlock(data){
        const lastBlock = this.chain[this.chain.length -1];
        const newBlock = this.block.mineBlock(lastBlock, data);

        this.chain.push(newBlock);
        return newBlock;
    }
}

module.exports = Blockchain;