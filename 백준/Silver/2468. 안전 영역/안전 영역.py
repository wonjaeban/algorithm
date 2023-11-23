import sys

sys.setrecursionlimit(100000)


def dfs(graph, visited, cur, height):
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    visited[cur[0]][cur[1]] = True

    for i in range(4):
        nx = cur[0] + dx[i]
        ny = cur[1] + dy[i]
        if 0 <= nx < len(graph) and 0 <= ny < len(graph[0]) and not visited[nx][ny] and graph[nx][ny] > height:
            dfs(graph, visited, (nx, ny), height)
    return

def solution():
    n = int(sys.stdin.readline())
    graph = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
    max_num = 0
    answer = 0
    for height in range(max(map(max, graph))):
      visited = [[False for _ in range(n)] for _ in range(n)]
      land_count = 0
      for x in range(n):
        for y in range(n):
          if not visited[x][y] and graph[x][y] > height:
            dfs(graph, visited, (x, y), height)
            land_count += 1
      answer = max(answer, land_count)
    print(answer)
    
solution()