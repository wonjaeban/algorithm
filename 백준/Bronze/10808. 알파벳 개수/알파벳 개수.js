let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const array = Array.from({length: 26}, () => 0);

for (let i = 0; i < input.length; i++) {
    array[input[i].charCodeAt(0) - 97]++;
}


console.log(array.join(' '));