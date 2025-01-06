let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({length: N + 1}, () => []);

for (let i = 1; i <= M; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

const visited = Array.from({length: N + 1}, () => false);

let answer = 0;

const dfs = (cur) => {
    visited[cur] = true;
    for (const next of graph[cur]) {
        if (!visited[next]) {
            dfs(next);
        }
    }
}

for (let i = 1; i <= N; i++) {
    if(!visited[i]) {
        dfs(i, 0);
        answer += 1;
    }
}

console.log(answer);