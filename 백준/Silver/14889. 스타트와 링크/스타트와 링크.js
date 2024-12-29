let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);

const graph = [];
for (let i = 1; i <= N; i++) {
    graph.push(input[i].split(' ').map(Number));
}

let min = Infinity;
const visited = Array(N).fill(false);

const calculateTeamScore = (team) => {
    let score = 0;
    for (let i = 0; i < team.length - 1; i++) {
        for (let j = i + 1; j < team.length; j++) {
            score += graph[team[i]][team[j]] + graph[team[j]][team[i]];
        }
    }
    return score;
};

const dfs = (index, startTeam) => {
    if (startTeam.length === N / 2) {
        // 나머지 팀 구성
        const linkedTeam = [];
        for (let i = 0; i < N; i++) {
            if (!visited[i]) linkedTeam.push(i);
        }

        // 점수 계산
        const startTeamSum = calculateTeamScore(startTeam);
        const linkedTeamSum = calculateTeamScore(linkedTeam);

        // 최소 점수 차이 갱신
        min = Math.min(min, Math.abs(startTeamSum - linkedTeamSum));
        return;
    }

    for (let i = index; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            startTeam.push(i);
            dfs(i + 1, startTeam);
            startTeam.pop();
            visited[i] = false;
        }
    }
};

// DFS 시작
dfs(0, []);

console.log(min);
