const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const signs = input[1];
const S = Array.from({ length: n }, () => []);

// 부호 행렬로 변환
let idx = 0;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        S[i][j] = signs[idx++];
    }
}

// 결과 수열
const numbers = Array(n).fill(0);

// 부분합 검증 함수
const isValid = (idx) => {
    let sum = 0;
    for (let i = idx; i >= 0; i--) {
        sum += numbers[i];
        const sign = S[i][idx];
        if ((sign === '+' && sum <= 0) || 
            (sign === '-' && sum >= 0) || 
            (sign === '0' && sum !== 0)) {
            return false;
        }
    }
    return true;
};

// 백트래킹
const backtrack = (idx) => {
    if (idx === n) return true; // 수열 완성

    for (let num = -10; num <= 10; num++) {
        numbers[idx] = num;
        if (isValid(idx) && backtrack(idx + 1)) {
            return true;
        }
    }
    return false;
};

backtrack(0);
console.log(numbers.join(' '));
