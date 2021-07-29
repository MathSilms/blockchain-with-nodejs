const Block = require('./block');
const Blockchain = require('./blockchain');



let block1 = Block.mineBlock(Block.genesis(), '$500');
let block2 = new Block('7657', '6854684asasdd', 'af5s4984dsa6s4589','100');
let block3 = new Block('0000', 'sd6ad8wa4d6sa', 'ca4g5585bre9a1847','300');

let blockchain = new Blockchain(block1);

blockchain.addBlock(block2);
blockchain.addBlock(block3);

console.log("---------------------");
console.log("bloco genesis :", Block.genesis());
console.log("---------------------");
console.log("primeiro bloco :",block1);
console.log("---------------------");
console.log("blocos:", [block1, block2, block3]);
console.log("---------------------");
console.log("blockchain :", blockchain.chain);
console.log("---------------------");

// // simulando um erro 

let secondBlock1 = Block.mineBlock(Block.genesis(), '$900');
let blockchainFork = new Blockchain(secondBlock1);

// erro de corrente com tamanho Menor que a corrente atual
blockchain.replaceChain(blockchainFork.chain);

// erro de corrente invalida
blockchain.replaceChain("corrente em formato invalido");
