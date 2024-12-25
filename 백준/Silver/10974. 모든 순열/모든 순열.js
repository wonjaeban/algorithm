let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const candidates = Array.from({length: Number(input)}, (_, i) => i + 1);

let answer = '';

const makeComb = (arr, cnt) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const fix = arr[i];
        if(cnt === 1) {
            result.push([fix]);
        } else {
            const rest = arr.filter((each) => each !== arr[i]);
            const newComb = makeComb(rest, cnt - 1);
            for (let j = 0; j < newComb.length; j++) {
                result.push([fix, ...newComb[j]]);
            }
        }
    }
    return result;
};

const answers = makeComb(candidates, Number(input));

for (let i = 0; i < answers.length; i++) {
    answer = answer + answers[i].join(' ') + '\n'
}

console.log(answer.toString().trim());
