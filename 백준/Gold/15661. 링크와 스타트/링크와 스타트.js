let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

const graph = [];
let min = Infinity;
const visited = Array(N).fill(false);
visited[0] = true;

for (let i = 1; i <= N; i++) {
    graph.push(input[i].split(' ').map(Number));
}

const dfs = (cur, startTeam) => {
    let startTeamSum = 0;
    let linkedTeamSum = 0;
    const linkedTeam = [];
    for (let i = 0; i < N; i++) {
        if (!visited[i]) linkedTeam.push(i);
    }    
    if (startTeam.length > 1) {
        for (let i = 0; i < startTeam.length - 1; i++) {
            for (let j = i + 1; j < startTeam.length; j++) {
                startTeamSum += graph[startTeam[i]][startTeam[j]] + graph[startTeam[j]][startTeam[i]];
            }
        }
    }
    if (linkedTeam.length > 1) {
        for (let i = 0; i < linkedTeam.length - 1; i++) {
            for (let j = i + 1; j < linkedTeam.length; j++) {
                linkedTeamSum += graph[linkedTeam[i]][linkedTeam[j]] + graph[linkedTeam[j]][linkedTeam[i]];
            }
        }
    }
    min = Math.min(min, Math.abs(startTeamSum - linkedTeamSum));
    if (startTeam.length === N - 1) {
        return;
    }

    for (let i = cur + 1; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            startTeam.push(i);
            dfs(i, startTeam);
            visited[i] = false;
            startTeam.pop();
        }
    }
}

dfs(0, [0]);
console.log(min);