let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = '';

const makeComb = (arr, cnt) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const fix = arr[i];
        if (cnt === 1) {
            result.push([fix]);
        } else {
            const rest = arr.filter((_, l) => l > i);
            const newComb = makeComb(rest, cnt - 1);
            for (let j = 0; j < newComb.length; j++) {
                result.push([fix, ...newComb[j]]);
            }
        }
    }
    return result;
};

for (let i = 0; i < input.length - 1; i++) {
    const newLine = input[i].split(' ').map(Number);
    const answers = makeComb(newLine.slice(1), 6);
    for (let j = 0; j < answers.length; j++) {
        answer = answer + answers[j].join(' ') + '\n';   
    }
    answer += '\n';
}

console.log(answer.trim());