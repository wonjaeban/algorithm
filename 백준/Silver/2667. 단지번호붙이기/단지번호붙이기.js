let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);

const graph = [];
const answer = [];

let max = -1;
let depth = 0;

for (let i = 1; i <= N; i++) {
    graph.push(input[i].split('').map(Number));
}

const DFS = (curX, curY) => {
    depth++;
    max = Math.max(max, depth);
    graph[curX][curY] = -1;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < 4; i++) {
        const newX = curX + dx[i];
        const newY = curY + dy[i];
        if (newX >= 0 && newY >= 0 && newX < N && newY < N && graph[newX][newY] === 1) {
            DFS(newX, newY);
        }
    }
}

for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
        if (graph[i][j] === 1) {
            max = -1;
            depth = 0;
            DFS(i, j);
            answer.push(max);
        }
    }
}

answer.sort((a, b) => a - b);

let stringAnswer = answer.length.toString() + '\n';

for (let i = 0; i < answer.length; i++) {
    stringAnswer = stringAnswer + answer[i] + '\n';
}

console.log(stringAnswer.trim());