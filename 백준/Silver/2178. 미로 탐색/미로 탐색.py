import sys
from collections import deque

def bfs(graph, queue):
  dx = [1, -1, 0, 0]
  dy = [0, 0, 1, -1]
  
  while queue:
    cur = queue.popleft()
    for i in range(4):
      nx = cur[0] + dx[i]
      ny = cur[1] + dy[i]
      if 0 <= nx < len(graph) and 0 <= ny < len(graph[0]) and  graph[nx][ny] == 1:
        graph[nx][ny] = graph[cur[0]][cur[1]] + 1
        queue.append((nx, ny))
    
  
def solution():
  N, M = map(int, sys.stdin.readline().split())
  graph = []
  queue = deque([(0, 0)])
  for _ in range(N):
    graph.append(list(map(int, sys.stdin.readline().strip())))
  bfs(graph, queue)
  print(graph[N - 1][M - 1])

solution()