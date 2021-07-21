const Blockchain = require('../src/blockchain');
const Block = require('../src/block');

describe('blockchain', ()=>{
    let blockchain;

    beforeEach(()=>{
        blockchain = new Blockchain;
    })
    
    it('the first block is genesis block', ()=>{
       expect(blockchain.chain[0]).toEqual(Block.genesis()); 
    });

    it('adds a new block', ()=>{
        const data = 'arquivo.pdf';

        blockchain.addBlock(data);
        
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data); 
     });
})