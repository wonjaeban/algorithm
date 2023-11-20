def dfs(graph, visited, cur):
  visited[cur] = True

  for next in graph[cur]:
    if not visited[next]:
      dfs(graph, visited, next)

def solution():
  n, m = map(int, input().split())
  count = 0
  graph = [[] for _ in range(n + 1)]
  visited = [False for _ in range(n + 1)]
  for _ in range(m):
    a, b = list(map(int, input().split()))
    graph[a].append(b)
    graph[b].append(a)
    
  for i in range(1, n + 1):
    if not visited[i]:
      dfs(graph, visited, i)
      count += 1
  print(count)

solution()