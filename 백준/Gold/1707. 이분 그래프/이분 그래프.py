import sys

sys.setrecursionlimit(200000)

def dfs(graph, visited, cur):
  if visited[cur[0]] != -1:
    return visited[cur[0]] == cur[1]
    
  visited[cur[0]] = cur[1]
  
  for next in graph[cur[0]]:
    if visited[next] == visited[cur[0]]:
      return False
    if visited[next] == -1:
      if cur[1] == 0:
        if not dfs(graph, visited, (next, 1)):
          return False
      else:
        if not dfs(graph, visited, (next, 0)):
          return False
  return True
    

def solution():
  k = int(sys.stdin.readline())
  answer = []
  for _ in range(k):
    v, e = map(int, sys.stdin.readline().split())
    graph = [[] for _ in range(v + 1)]
    visited = [-1 for _ in range(v + 1)]
    for _ in range(e):
      a, b = map(int, sys.stdin.readline().split())
      graph[a].append(b)
      graph[b].append(a)
    result = True

    for idx in range(1, v + 1):
      if visited[idx] == -1:
        result = dfs(graph, visited, (idx, 0))
      if not result:
        break
    if result:
      answer.append("YES")
    else:
      answer.append("NO")
  for ans in answer:
    print(ans)
    
solution()