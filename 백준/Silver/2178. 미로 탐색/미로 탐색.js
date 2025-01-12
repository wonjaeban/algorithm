let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = [];

for (let i = 1; i < input.length; i++) {
    graph.push(input[i].split('').map(Number));
}

const visited = Array.from({length : N}, () => Array.from({length: M}, () => 0));
const queue = [[0, 0, 1]];
visited[0][0] = 1;

const bfs = () => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    while (queue.length > 0) {
        const [curX, curY, depth] = queue.shift();
        if (curX === N - 1 && curY === M - 1) {
            return depth;
        }
        for (let i = 0; i < 4; i++) {
            const newX = curX + dx[i];
            const newY = curY + dy[i];
            if (newX < 0 || newY < 0 || newX >= N || newY >= M) continue;
            if (graph[newX][newY] === 1 && visited[newX][newY] === 0) {
                queue.push([newX, newY, depth + 1]);
                visited[newX][newY] = 1;
            }
        }
    }
}
console.log(bfs());