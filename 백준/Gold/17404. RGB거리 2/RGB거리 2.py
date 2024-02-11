import sys

def solution():
  N = int(sys.stdin.readline())
  graph = []
  for _ in range(N):
    graph.append(list(map(int, sys.stdin.readline().split())))
  min_num = 1001 * N
  for i in range(3):
    dp = [[1001 * N, 1001 * N, 1001 * N] for _ in range(N)]
    dp[0][i] = graph[0][i]
    for j in range(1, N):
      dp[j][0] = graph[j][0] + min(dp[j-1][1], dp[j-1][2])
      dp[j][1] = graph[j][1] + min(dp[j-1][0], dp[j-1][2])
      dp[j][2] = graph[j][2] + min(dp[j-1][0], dp[j-1][1])
    for k in range(3):
      if k != i:
        min_num = min(min_num, dp[N-1][k])
  print(min_num)

solution()