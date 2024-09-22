function solution(tickets) {
    const graph = new Map();
    const result = [];

    // 그래프 구성
    for (const [start, end] of tickets) {
        if (graph.has(start)) {
            graph.get(start).push(end);
            graph.get(start).sort();  // 알파벳 순으로 정렬
        } else {
            graph.set(start, [end]);
        }
    }

    function DFS(cur) {
        const possible = graph.get(cur) || [];

        // 가능한 모든 경로를 탐색
        while (possible.length > 0) {
            const next = possible.shift();  // 알파벳 순으로 가장 앞의 경로 선택
            DFS(next);
        }

        // 경로가 끝나면 결과에 추가 (역순으로 추가)
        result.push(cur);
    }

    DFS('ICN');  // 출발지 'ICN'에서 시작

    return result.reverse();  // 결과를 역순으로 반환
}