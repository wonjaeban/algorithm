import sys

def solution():
  N, K = map(int, sys.stdin.readline().split())
  dp = [[1 for _ in range(K + 1)] for _ in range(N + 1)]
  dp[0][0] = 0
  for i in range(1, N + 1):
    for j in range(1, K + 1):
      if i == 1:
        dp[i][j] = j
      elif j == 1:
        dp[i][j] = 1
      else:
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  print(dp[N][K] % 1000000000)


solution()