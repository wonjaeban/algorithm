let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const N = input[0];
const B = Number(input[1]);

console.log(parseInt(N, B));