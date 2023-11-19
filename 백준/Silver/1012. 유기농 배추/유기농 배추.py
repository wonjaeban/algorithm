def dfs(graph, visited, cur):
  dx = [1, -1, 0, 0]
  dy = [0, 0, 1, -1]
  visited[cur[0]][cur[1]] = True

  for i in range(4):
    new_x = cur[0] + dx[i] 
    new_y = cur[1] + dy[i]
    if 0 <= new_x < len(graph) and 0 <= new_y < len(graph[0]) and graph[new_x][new_y] == 1 and not visited[new_x][new_y]:
      dfs(graph, visited, (new_x, new_y))


def solution():
  t = int(input())
  answer = [0 for _ in range(t)]
  for test_case in range(t):
    m, n, k = list(map(int, input().split()))
    graph = [[0 for _ in range(m)] for _ in range(n)]
    visited = [[False for _ in range(m)] for _ in range(n)]
    for _ in range(k):
      y, x = list(map(int, input().split()))
      graph[x][y] = 1
    for x in range(n):
      for y in range(m):
        if graph[x][y] == 1 and not visited[x][y]:
          dfs(graph, visited, (x, y))
          answer[test_case] += 1
    

  for ans in answer:
    print(ans)
 
solution()