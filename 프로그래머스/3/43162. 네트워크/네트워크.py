def dfs(index, visited, computers):
    visited[index] = 1
    for idx, com in enumerate(computers[index]):
        if idx == index or com == 0 or visited[idx]:
            continue
        dfs(idx, visited, computers)
        
    

def solution(n, computers):
    answer = 0
    visited = [0 for i in range(n)]
    for i in range(n):
        if visited[i] == 1:
            continue
        dfs(i, visited, computers)
        answer += 1
        
    return answer