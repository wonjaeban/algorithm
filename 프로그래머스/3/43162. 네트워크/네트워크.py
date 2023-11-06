def DFS(n, computers, index, visited):
    visited[index] = 1
    for connect in range(n):
        if connect != index and computers[index][connect] == 1: #연결된 컴퓨터
            if visited[connect] == False:
                DFS(n, computers, connect, visited)

def solution(n, computers):
    answer = 0
    visited = [0 for i in range(n)]
    for index in range(n):
        if visited[index] == 0:
            DFS(n, computers, index, visited)
            answer += 1 #DFS로 최대한 컴퓨터들을 방문하고 빠져나오게 되면 그것이 하나의 네트워크.
    return answer

