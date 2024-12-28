let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

const graph = [];

for (let i = 1; i <= count; i++) {
    const line = input[i].split(' ').map(Number);
    graph.push(line);
}

let min = Infinity;

const dfs = (sum, visited, cur) => {
    visited[cur] = true;
    if (!visited.includes(false)) {
        if (graph[cur][0] > 0 && sum + graph[cur][0] < min) {
            min = sum + graph[cur][0];
            return;
        }
    }
    const next = graph[cur];
    for (let i = 0; i < next.length; i++) {
        if(next[i] === 0 || visited[i]) continue;
        dfs(sum + next[i], [...visited], i);
    }
}

dfs(0, Array.from({length: count}, () => false), 0);

console.log(min);