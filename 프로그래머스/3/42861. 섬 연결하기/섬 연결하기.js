// 크루스칼 알고리즘이다...

function getParent(parent, x) {
    if (parent[x] === x) return x;
    return parent[x] = getParent(parent, parent[x]);
}

function unionParent(parent, x, y) {
    const p1 = getParent(parent, x);
    const p2 = getParent(parent, y);
    if (p1 < p2) parent[p2] = p1;
    else parent[p1] = p2;
}

function sameParent(parent, x, y) {
    const p1 = getParent(parent, x);
    const p2 = getParent(parent, y);
    if (p1 === p2) return true;
    return false;
}

function solution(n, costs) {
    const parent = [];
    let answer = 0;
    for (let i = 0; i < n; i++) {
        parent.push(i);
    }
    // 가중치로 정렬부터 한다.
    costs.sort((a, b) => a[2] - b[2])
    for (cost of costs) {
        if (!sameParent(parent, cost[0], cost[1])) {
            // 아직 연결 안되었으면 연결새로 해줘야하니깐 cost 더하고 연결하기~
            answer += cost[2];
            unionParent(parent, cost[0], cost[1]);
        }
    }
    return answer
}