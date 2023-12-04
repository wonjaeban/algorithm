import sys

sys.setrecursionlimit(100000)


def dfs(graph, visited, cur):
  for nxt in graph[cur[0]]:
    if visited[nxt[0]] == -1:
      visited[nxt[0]] = visited[cur[0]] + nxt[1]
      dfs(graph, visited, nxt)
  return
    

def solution():
  v = int(sys.stdin.readline())
  graph = [[] for _ in range(v + 1)]
  visited = [-1 for _ in range(v + 1)]
  for _ in range(v):
    new_line = list(map(int, sys.stdin.readline().split()))
    for idx, element in enumerate(new_line):
      if element == -1:
        break
      if idx % 2 == 0:
        continue
      if idx % 2 != 0:
        graph[new_line[0]].append((new_line[idx], new_line[idx + 1]))
  visited[1] = 0
  dfs(graph, visited, (1, 0))
  target = 0
  max_value = 0
  for idx, element in enumerate(visited):
    if max_value < element:
      max_value = element
      target = idx
  visited = [-1 for _ in range(v + 1)]
  visited[target] = 0
  dfs(graph, visited, (target, 0))
  print(max(visited))
    
solution()