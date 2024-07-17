"use strict";

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "Wiki\\input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");
const [n, m] = input[0].split(" ");
const N = Number(n);
const M = Number(m);

const numbers = input[1].split(" ");
let result = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  sum = 0;
  for (let j = i; j < N; j++) {
    const number = Number(numbers[j]);
    sum += number;
    if (sum === M) {
      result += 1;
      break;
    } else if (sum > M) {
      break;
    }
  }
}

console.log(result);
