let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const array = Array.from({length: 4}, () => 0);
const answer = [];

for (const sentence of input) {
    if (sentence.length === 0) continue;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] >= 'a' && sentence[i] <= 'z') {
            array[0]++;
        } else if (sentence[i] >= 'A' && sentence[i] <= 'Z') {
            array[1]++;
        } else if (sentence[i] >= '0' && sentence[i] <= '9') {
            array[2]++;
        } else if (sentence[i] === ' ') {
            array[3]++;
        }
    }
    answer.push(array.join(' '))
    array[0] = 0;
    array[1] = 0;
    array[2] = 0;
    array[3] = 0;
}

for (const ans of answer) {
    console.log(ans);
}