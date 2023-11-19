def dfs(graph, visited, cur):
  visited[cur] = True
  for node in graph[cur]:
    if not visited[node]:
      dfs(graph, visited, node)

n = int(input())
v = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(v):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)
visited = [False] * (n + 1)
dfs(graph, visited, 1)
count = -1
for isVisit in visited:
  if isVisit:
    count += 1
print(count)