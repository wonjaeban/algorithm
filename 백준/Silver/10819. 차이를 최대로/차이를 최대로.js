let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const candidates = input[1].split(' ').map(Number);

const makeComb = (arr, cnt) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const fix = arr[i];
        if(cnt === 1) {
            result.push([fix]);
        } else {
            const rest = arr.filter((_, j) => j !== i);
            const newComb = makeComb(rest, cnt - 1);
            for (let j = 0; j < newComb.length; j++) {
                result.push([fix, ...newComb[j]]);
            }
        }
    }
    return result;
};

const answers = makeComb(candidates, candidates.length);

let max = 0;

for (let i = 0; i < answers.length; i++) {
    let sum = 0;
    for (let j = 0; j < answers[i].length - 1; j++) {
        sum += Math.abs(answers[i][j] - answers[i][j + 1]);
    }
    if (max < sum) max = sum;
}

console.log(max);