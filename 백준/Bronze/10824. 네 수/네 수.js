let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(input[0] + input[1]) + Number(input[2] + input[3]));