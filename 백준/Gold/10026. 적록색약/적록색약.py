def dfs(graph, visited, cur):
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    visited[cur[0]][cur[1]] = True

    for i in range(4):
        nx = cur[0] + dx[i]
        ny = cur[1] + dy[i]
        if 0 <= nx < len(graph) and 0 <= ny < len(graph[0]) and not visited[nx][ny] and graph[cur[0]][cur[1]] == graph[nx][ny]:
            dfs(graph, visited, (nx, ny))
    return

def solution():
    n = int(input())
    graph = []
    for _ in range(n):
      graph.append(list(input()))
    normal_visited = [[False for _ in range(n)] for _ in range(n)]
    blindness_visited = [[False for _ in range(n)] for _ in range(n)]
    normal_count = 0
    blindness_count = 0
    for x in range(n):
      for y in range(n):
        if not normal_visited[x][y]:
          dfs(graph, normal_visited, (x, y))
          normal_count += 1
    for x in range(n):
      for y in range(n):
          if graph[x][y] == 'R':
              graph[x][y] = 'G'
    for x in range(n):
      for y in range(n):
        if not blindness_visited[x][y]:
          dfs(graph, blindness_visited, (x, y))
          blindness_count += 1
    print(normal_count, blindness_count)
    
solution()