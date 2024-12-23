let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim();

let sum = BigInt(0);

for (let i = 1; i < inputs.length; i++) {
    sum = sum + BigInt(i * 9 * (10 ** (i - 1)));
}

sum = sum + ((BigInt(inputs) - BigInt(10 ** (inputs.length - 1))) + BigInt(1)) * BigInt(inputs.length);

console.log(sum.toString());