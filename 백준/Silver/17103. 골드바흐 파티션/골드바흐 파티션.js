let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const all = input.filter(line => line.trim() !== '').map(Number);
const numbers = all.slice(1);
const maxNum = Math.max(...numbers);

const isPrime = Array.from({length : maxNum + 1}, () => true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= maxNum; i++) {
    for (let j = i * i; j <= maxNum; j += i) {
        isPrime[j] = false;
    }
}

let answerString = '';

for (const num of numbers) {
    let answer = 0;
    for (let i = 2; i <= (num / 2); i++) {
        if (isPrime[i] && isPrime[num - i]) {
            answer++;
        }
    }
    answerString += `${answer}\n`
}


console.log(answerString.trim());