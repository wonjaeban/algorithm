let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const K = Number(input[0]);

let is2분;
let answer = '';

const dfs = (cur, color, graph) => {
    if (is2분 === 'NO') return;
    for (const next of graph[cur]) {
        if (color[next] !== '' && color[next] === color[cur]) {
            is2분 = 'NO'
            return;
        }
        if (color[next] === '') {
            color[next] = color[cur] === 'red' ? 'blue' : 'red';
            dfs(next, color, graph);
        }
    }
}

for (let i = 1; i < input.length; i++) {
    is2분 = 'YES';
    const [V, E] = input[i].split(' ').map(Number);
    const graph = Array.from({length: V + 1}, () => []);
    const color = Array.from({length: V + 1}, () => '');
    const limit = i + E;
    while (i < limit) {
        i++;
        const [x, y] = input[i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    for (let j = 1; j <= V; j++) {
        if(color[j] === '') {
            color[j] = 'red';
            dfs(j, color, graph);
        }
    }
    answer = answer + is2분 + '\n';
}

console.log(answer.trim());