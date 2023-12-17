import sys
from collections import deque


def bfs(graph, queue):
  dx = [2, 2, 1, 1, -1, -1, -2, -2]
  dy = [1, -1, 2, -2, 2, -2, 1, -1]
  while queue:
    cur = queue.popleft()
    for i in range(8):
      nxt_x = cur[0] + dx[i]
      nxt_y = cur[1] + dy[i]
      if 0 <= nxt_x < len(graph) and 0 <= nxt_y < len(graph) and graph[nxt_x][nxt_y] == 0:
        graph[nxt_x][nxt_y] = graph[cur[0]][cur[1]] + 1
        queue.append((nxt_x, nxt_y))

        
    

def solution():
  answer = []
  N = int(sys.stdin.readline())
  for _ in range(N):
    i = int(sys.stdin.readline())
    graph = [[0 for _ in range(i)] for _ in range(i)]
    x, y = map(int, sys.stdin.readline().split())
    tar_x, tar_y = map(int, sys.stdin.readline().split())
    if x == tar_x and y == tar_y:
      answer.append(0)
      continue 
    queue = deque([(x, y)])
    bfs(graph, queue)
    answer.append(graph[tar_x][tar_y])
  for element in answer:
    print(element)
    
    
solution()