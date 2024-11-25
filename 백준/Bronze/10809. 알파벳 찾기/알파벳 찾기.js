let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const array = Array.from({length: 26}, () => -1);

for (let i = 0; i < input.length; i++) {
    if (array[input[i].charCodeAt(0) - 97] === -1) {
        array[input[i].charCodeAt(0) - 97] = i
    }
}

console.log(array.join(' '));