const tB = require('../byteMe')


const ex1 = tB.trekkbyte(1, 'TB', 'GB')
const ex2 = tB.trekkbyte(1, 'TiB', 'GiB')

console.log(ex1)
console.log(ex2)
console.log(tB.trekkbyteList())