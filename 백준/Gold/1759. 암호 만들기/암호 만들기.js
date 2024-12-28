let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const cnt = input[0].split(' ').map(Number)[0];

const vowels = ['a', 'e', 'i', 'o', 'u'];
const arrs = input[1].split(' ').sort();
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

const candidates = makeComb(arrs, cnt);
for (let i = 0; i < candidates.length; i++) {
    const line = candidates[i];
    let vowelsCnt = 0;
    let consonantsCnt = 0;
    for (let j = 0; j < line.length; j++) {
        if(vowels.includes(line[j])) {
            vowelsCnt++;
        } else {
            consonantsCnt++;
        }
    }
    if (vowelsCnt >= 1 && consonantsCnt >= 2) {
        answer = answer + line.join('') + '\n';
    }
}
console.log(answer.trim());