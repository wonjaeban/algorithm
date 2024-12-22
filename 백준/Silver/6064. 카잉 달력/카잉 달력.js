let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const k = Number(inputs[0]);

// 최대공약수(GCD) 계산
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// 최소공배수(LCM) 계산
const lcm = (a, b) => (a * b) / gcd(a, b);

const find = (M, N, x, y) => {
    const limit = lcm(M, N);
    x -= 1; // 0-based 인덱스로 변환
    y -= 1; // 0-based 인덱스로 변환

    for (let k = 0; k * M < limit; k++) {
        const count = x + k * M;
        if (count % N === y) {
            return count + 1; // 1-based로 변환
        }
    }
    return -1;
};

let answer = '';

for (let i = 1; i <= k; i++) {
    const [M, N, x, y] = inputs[i].split(' ').map(Number);
    answer += find(M, N, x, y) + '\n';
}

console.log(answer.trim());
