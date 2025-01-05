let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N + 1}, () => false);

for (let i = 1; i <= M; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

graph.forEach(edges => edges.sort((a, b) => a - b));

const dfsAnswer = [];
const dfs = (cur) => {
    visited[cur] = true;
    dfsAnswer.push(cur);
    for (const next of graph[cur]) {
        if(!visited[next]) {
            dfs(next);
        }
    }
}
dfs(V);

visited.fill(false);

const queue = [V];
visited[V] = true;
const bfsAnswer = [];
const bfs = () => {
    while (queue.length > 0) {
        const cur = queue.shift();
        bfsAnswer.push(cur);
        for(const nex of graph[cur]) {
            if(!visited[nex]) {
                visited[nex] = true;
                queue.push(nex);
            }
        }
    }
}

bfs();

console.log(dfsAnswer.join(' ') + '\n' + bfsAnswer.join(' '));
