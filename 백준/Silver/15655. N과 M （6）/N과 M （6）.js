let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const candidates = inputs[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = '';

const makeComb = (arr, cnt) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const fix = arr[i];
        if(cnt === 1) {
            result.push([fix]);
        } else {
            const rest = arr.filter((each) => each > arr[i]);
            const newComb = makeComb(rest, cnt - 1);
            for (let j = 0; j < newComb.length; j++) {
                result.push([fix, ...newComb[j]]);
            }
        }
    }
    return result;
};

const answers = makeComb(candidates, M);

for (let i = 0; i < answers.length; i++) {
    answer = answer + answers[i].join(' ') + '\n'
}

console.log(answer.toString().trim());
