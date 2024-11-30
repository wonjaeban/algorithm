const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [n, m] = input.map(Number);

// 주어진 숫자에서 소인수 `factor`의 개수를 구하는 함수
const countFactors = (num, factor) => {
    let count = 0;
    while (num >= factor) {
        count += Math.floor(num / factor);
        num = Math.floor(num / factor);
    }
    return count;
};

// 5의 개수
const countFive = (num) => countFactors(num, 5);
// 2의 개수
const countTwo = (num) => countFactors(num, 2);

// nCk의 끝자리 0의 개수는 5와 2 중 최소값
const fiveCount = countFive(n) - countFive(m) - countFive(n - m);
const twoCount = countTwo(n) - countTwo(m) - countTwo(n - m);

console.log(Math.min(fiveCount, twoCount));
