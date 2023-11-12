from collections import deque

def bfs(graph, queue, tar_x, tar_y, visited):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    while queue:
        cur_x, cur_y = queue.popleft()
        if cur_x == tar_x and cur_y == tar_y:
            return visited[cur_x][cur_y]  // 2
        for i in range(4):
            new_x = cur_x + dx[i]
            new_y = cur_y + dy[i]
            if graph[new_x][new_y] == 1 and visited[new_x][new_y] == 1:
                visited[new_x][new_y] = visited[cur_x][cur_y] + 1
                queue.append((new_x, new_y))
    return visited[cur_x][cur_y]  // 2


def solution(rectangle, characterX, characterY, itemX, itemY):
    graph = [[-1 for i in range(102)] for i in range(102)]
    visited = [[1 for i in range(102)] for i in range(102)]
    for rec in rectangle:
        for row in range(rec[0] * 2, rec[2] * 2 + 1):
            for col in range(rec[1] * 2, rec[3] * 2 + 1):
                if rec[0] * 2 < row < rec[2] * 2 and rec[1] * 2 < col < rec[3] * 2:
                    graph[row][col] = 0
                elif graph[row][col] != 0:
                    graph[row][col] = 1
    queue = deque([(characterX * 2, characterY * 2)])
    return bfs(graph, queue, itemX * 2, itemY * 2, visited)
