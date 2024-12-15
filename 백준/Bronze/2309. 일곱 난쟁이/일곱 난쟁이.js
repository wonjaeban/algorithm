let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number).filter(Boolean);


const getComb = (arr, count) => {
    const result = [];
    if (count === 1) {
        return arr.map((ele) => [ele]);
    }
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(i + 1);
        const combs = getComb(rest, count - 1);
        const attached = combs.map((ele) => [arr[i], ...ele]);
        result.push(...attached);
    }
    return result;
}

const possibles = getComb(inputs, 7);
let answer;

for (let i = 0; i < possibles.length; i++) {
    let sum = 0;
    const line = possibles[i];
    for (let j = 0; j < line.length; j++) {
        sum += line[j]
    }
    if(sum === 100) {
        answer = line;
        break;
    }
}
answer.sort((a, b) => a - b);

let answerString = '';

for (let i = 0; i < answer.length; i++) {
    answerString = answerString + answer[i] + '\n';
}

console.log(answerString.trim());