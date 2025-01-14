let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

const bfs = (queue, I, visited, target) => {
    const [tarX, tarY] = target;
    while (queue.length > 0) {
        const [curX, curY, depth] = queue.shift();
        if(curX === tarX && curY === tarY) return depth;
        for (let i = 0; i < 8; i++) {
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];
            if (nextX < 0 || nextY < 0 || nextX >= I || nextY >= I) continue;
            if (visited[nextX][nextY] !== 1) {
                queue.push([nextX, nextY, depth + 1]);
                visited[nextX][nextY] = 1;
            }
        }
    }
};

const answer = [];

for (let i = 1; i < input.length; i++) {
    const I = Number(input[i]);
    const queue = [];
    const visited = Array.from({length: I}, () => Array.from({length: I}, () => 0));
    i++;
    const [curX, curY] = input[i].split(' ').map(Number);
    visited[curX][curY] = 1;
    queue.push([curX, curY, 0]);
    i++;
    const [tarX, tarY] = input[i].split(' ').map(Number);
    answer.push(bfs(queue, I, visited, [tarX, tarY]));
}

let answerString = '';

for (let i = 0; i < answer.length; i++) {
    answerString = answerString + answer[i] + '\n';
}

console.log(answerString.trim());