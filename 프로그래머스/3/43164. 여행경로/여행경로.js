function solution(tickets) {
    // 1. 티켓을 사전순으로 정렬
    tickets.sort((a, b) => {
        return a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0]);
    });

    // 2. ticketMap 생성
    const ticketMap = new Map();
    for (const ticket of tickets) {
        if (!ticketMap.has(ticket[0])) {
            ticketMap.set(ticket[0], []);
        }
        ticketMap.get(ticket[0]).push(ticket[1]);
    }

    const visited = [];
    const answer = [];

    function DFS(cur) {
        // 모든 티켓을 사용한 경우 결과에 저장
        if (visited.length === tickets.length) {
            answer.push([...visited, cur]);
            return true;
        }

        // 현재 위치에서 출발할 수 있는 모든 경로 확인
        const nextCities = ticketMap.get(cur) || [];
        for (let i = 0; i < nextCities.length; i++) {
            const next = nextCities[i];
            // 다음 경로로 진행
            visited.push(cur);
            ticketMap.get(cur).splice(i, 1);  // 티켓 사용 후 제거
            if (DFS(next)) return true;       // 성공 시 즉시 종료
            ticketMap.get(cur).splice(i, 0, next); // 복원
            visited.pop(); // 방문 기록 복원
        }
        return false;
    }

    DFS("ICN");
    return answer[0];
}
