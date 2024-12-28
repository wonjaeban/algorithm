let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const disable = [];

for (let i = 1; i <= N; i++) {
    const [T, P] = input[i].split(' ').map(Number);
    if(i + T - 1 > N) {
        disable.push(i)
    }
}

let max = 0;

const dfs = (sum, cur) => {
    const possibles = [];
    const [T, P] = input[cur].split(' ').map(Number);
    for (let i = cur + T; i <= N; i++) {
        if (!disable.includes(i)) {
            possibles.push(i);
        }
    }
    // console.log(cur, possibles, sum);
    if (possibles.length === 0) {
        if (max < sum) {
            max = sum;
        }
        return;
    };
    for (let i = 0; i < possibles.length; i++) {
        const [T, P] = input[possibles[i]].split(' ').map(Number);
        dfs(sum + P, possibles[i]);
    }
}

for (let i = 1; i <= N; i++) {
    if(!disable.includes(i)) {
        const [T, P] = input[i].split(' ').map(Number);
        dfs(P, i);
    }
}

console.log(max);