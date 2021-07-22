const Block = require('./block');

class Blockchain {
    constructor() {
        this.block = Block;
        this.chain = [this.block.genesis()];
    }
    // método para adicionar blocos
    addBlock(data) {
        const lastBlock = this.chain[this.chain.length - 1];
        const newBlock = this.block.mineBlock(lastBlock, data);

        this.chain.push(newBlock);
        return newBlock;
    }

    // método para validar qual corrente vai ser utilizada na blockchain
    isValidChain(chain) {

        if (JSON.stringify(chain[0] !== JSON.stringify(Block.genesis()))) return false;

        for (let i = 1; i < chain.length; i++) {

            const block = chain[i];
            const lastBlock = chain[i - 1];

            if (block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block))
                return false
                
        }

        return true;
    }
}

module.exports = Blockchain;