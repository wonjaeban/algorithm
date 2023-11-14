def solution(tickets):
    tickets.sort(key=lambda x: (x[0], x[1]))
    
    def dfs(remain_t, path):
        if len(remain_t) == 0:
            return path
        cur = path[-1]
        valid_idx = -1
        
        # 남은 티켓(정렬된 상태) 중에서, 출발지가 현재 공항인 티켓의 인덱스를 찾음
        # 조건을 만족하는 티켓 중 가장 왼쪽의 티켓에서 멈춤
        for i in range(len(remain_t)):
            if remain_t[i][0] == cur:
                valid_idx = i
                break
        
        while remain_t[valid_idx][0] == cur:
                next = dfs(remain_t[:valid_idx] + remain_t[valid_idx + 1:], path + [remain_t[valid_idx][1]])
                if next != []:
                    return next
                valid_idx += 1
        return []
    return dfs(tickets, ["ICN"])
     