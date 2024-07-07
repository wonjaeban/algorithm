"use strict";

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "Wiki\\input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");
// const input = `0 7`.trim().split("\n");
const [N, M] = input[0].split(" ");
if (Number(N) === 0) {
  return console.log(0);
}
const weights = input[1].split(" ");
const maxWeight = Number(M);
let weightSum = 0;
let answer = 0;

for (let i = 0; i < weights.length; i++) {
  const weight = Number(weights[i]);
  weightSum += weight;
  // console.log(i, weightSum);
  if (weightSum >= maxWeight) {
    weightSum = weightSum === maxWeight ? 0 : weight;
    answer += 1;
  }
}

console.log(weightSum > 0 ? answer + 1 : answer);
