let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const k = Number(input[0]);
const signs = input[1].split(' ');

const maxNum = [];
const minNum = [];

for (let i = 0; i <= k; i++) {
    maxNum.push((9 - i).toString());
    minNum.push(i.toString());
}

const isCorrect = (left, sign, right) => {
    if (sign === '>') {
        return left > right ? true : false;
    } else {
        return left < right ? true : false;
    }
}

for (let i = 0; i < k; i++) {
    if (!isCorrect(maxNum[i], signs[i], maxNum[i + 1])) {
        let temp = maxNum[i];
        maxNum[i] = maxNum[i + 1];
        maxNum[i + 1] = temp;
        if (i !== 0) {
            i-=2;
        }
    }
}

for (let i = 0; i < k; i++) {
    if (!isCorrect(minNum[i], signs[i], minNum[i + 1])) {
        let temp = minNum[i];
        minNum[i] = minNum[i + 1];
        minNum[i + 1] = temp;
        if (i !== 0) {
            i-=2;
        }
    }
}

console.log(maxNum.join(''));

console.log(minNum.join(''));