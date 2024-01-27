import sys

def solution():
  N, M = map(int, sys.stdin.readline().split())
  answer = []
  graph = []
  for _ in range(N):
    graph.append(list(map(int, sys.stdin.readline().split())))

  dp = [[0] * (N + 1) for _ in range(N + 1)]

  for x in range(1, N + 1):
    for y in range(1, N + 1):
      dp[x][y] = dp[x-1][y] + dp[x][y-1] - dp[x-1][y-1] + graph[x-1][y-1]
    
  for _ in range(M):
    x1, y1, x2, y2 = map(int, sys.stdin.readline().split())
    sum = dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1]
    answer.append(sum)

  for ans in answer:
    print(ans)
    
    
solution()