function solution(n, computers) {
    let answer = 0;
    const visited = [];

    function DFS(index, visited) {
        visited.push(index);
        const targets = [];
        for (let i = 0; i < n; i++) {
            if (i !== index && computers[index][i] === 1) {
                targets.push(i);
            }
        }
        for (let i = 0; i < targets.length; i++) {
            if(!visited.includes(targets[i])) {
                DFS(targets[i], visited);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if(!visited.includes(i)) {
            DFS(i, visited);
            answer += 1;
        }
    }
    return answer;
}