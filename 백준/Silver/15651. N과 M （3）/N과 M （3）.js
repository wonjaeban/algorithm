let fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const candidates = Array.from({length: N}, (_, i) => i + 1);

let answer = '';

const makeComb = (arr, cnt) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const fix = arr[i];
        if(cnt === 1) {
            result.push([fix]);
        } else {
            // const rest = arr.slice(i + 1);
            const newComb = makeComb(arr, cnt - 1);
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
