let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = input.map(Number).filter(num => num > 0); // 0 제거
const maxNum = Math.max(...numbers);

const mapping = Array.from({ length: maxNum + 1 }, () => true);
mapping[0] = false;
mapping[1] = false;

for (let i = 2; i * i <= maxNum; i++) {
    if (mapping[i]) {
        for (let j = i * i; j <= maxNum; j += i) {
            mapping[j] = false;
        }
    }
}

let ans = "";

for (const number of numbers) {
    let found = false;
    for (let i = 3; i <= number; i++) {
        if (mapping[i] && mapping[number - i]) {
            ans += `${number} = ${i} + ${number - i}\n`;
            found = true;
            break;
        }
    }

    if (!found) {
        ans += "Goldbach's conjecture is wrong.\n";
    }
}

console.log(ans);
