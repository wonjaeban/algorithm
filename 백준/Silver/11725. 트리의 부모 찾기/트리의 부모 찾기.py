import sys
from collections import deque


def bfs(graph, visited):
  queue = deque([1])

  while queue:
    cur = queue.popleft()
    for nxt in graph[cur]:
      if visited[nxt] == 0:
        visited[nxt] = cur
        queue.append(nxt)

        
    

def solution():
  # N = map(int, sys.stdin.readline().split())
  N = int(sys.stdin.readline())
  graph = [[] for _ in range(N + 1)]
  visited = [0 for _ in range(len(graph))]
  for _ in range(N - 1):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)
  bfs(graph, visited)
  for i in range(2, N + 1):
    print(visited[i])
    
    
solution()