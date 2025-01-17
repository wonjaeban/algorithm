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
            // const rest = arr.filter((each, k) => k !== i);
            const newComb = makeComb(arr, cnt - 1);
            for (let j = 0; j < newComb.length; j++) {
                result.push([fix, ...newComb[j]]);
            }
        }
    }
    return result;
};

const answers = makeComb(candidates, M);
const setAnswers = new Set();

for (let i = 0; i < answers.length; i++) {
    setAnswers.add(answers[i].join(' '));
}

const realAnswers = Array.from(setAnswers);

for (let i = 0; i < realAnswers.length; i++) {
    answer = answer + realAnswers[i] + '\n'
}

console.log(answer.toString().trim());