const Block = require('./block');


const block = new Block('7657', '6854684asasdd', 'af5s4984dsa6s4589','100');


console.log(block.toString());
console.log(Block.genesis().toString());
const firstBlock = Block.mineBlock(Block.genesis(), '$500');

console.log(firstBlock.toString());