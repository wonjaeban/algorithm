import sys

def solution():
  N = int(sys.stdin.readline())
  dp = [[1 for _ in range(3)] for _ in range(N)]
  for i in range(1, N):
    for j in range(3):
      if j == 0:
        dp[i][j] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2]) % 9901
      elif j == 1 or j == 2:
        dp[i][j] = (dp[i-1][0] + dp[i-1][1]) % 9901
  print(sum(dp[N-1]) % 9901)

solution()