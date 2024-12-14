let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(inputs[0]);
const numbers = inputs[1].split(' ').map(Number);

// dp1[i] : i번째 수를 포함하는 최대 연속합
// dp2[i] : i번째 수를 하나 제거했을 때의 최대 연속합
const dp1 = Array.from({length: n}, () => 0);
const dp2 = Array.from({length: n}, () => 0);

// 초기화
dp1[0] = numbers[0]; 
dp2[0] = numbers[0];

for (let i = 1; i < n; i++) {
    dp1[i] = Math.max(numbers[i], dp1[i - 1] + numbers[i]); // 연속 부분합
    dp2[i] = Math.max(dp1[i - 1], dp2[i - 1] + numbers[i]); // 하나의 수를 제거한 경우의 연속 부분합
}

console.log(Math.max(...dp1, ...dp2));
