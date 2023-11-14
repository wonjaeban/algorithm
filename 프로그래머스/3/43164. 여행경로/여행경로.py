def solution(tickets):
    tickets.sort(key=lambda x: (x[0], x[1]))
    
    def dfs(remain_t, path):
        if len(remain_t) == 0:
            return path
        cur = path[-1]
        
        for idx, remain in enumerate(remain_t):
            if remain[0] == cur:
                next = dfs(remain_t[:idx] + remain_t[idx + 1:], path + [remain[1]])
                if next != []:
                    return next
        return []
    return dfs(tickets, ["ICN"])
