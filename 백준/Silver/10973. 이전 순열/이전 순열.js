let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const target = input[1].split(' ').map(Number);

let i = target.length - 1;

while(target[i - 1] < target[i]) {
    i--;
}

if (i === 0) {
    console.log(-1);
    return;
}

let j = target.length - 1;

while(target[i - 1] < target[j]) {
    j--;
}

[target[i - 1], target[j]] = [target[j], target[i - 1]];

let left = i;
let right = target.length - 1;

while (left < right) {
    if (target[left] < target[right]) {
        [target[left], target[right]] = [target[right], target[left]];
    }
    left++;
    right--;
}

console.log(target.join(' '));