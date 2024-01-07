import sys
        

def solution():
  n = int(sys.stdin.readline())
  dp = []
  for i in range(n):
    dp.append([0] * (i + 1))
  inputs = []
  for _ in range(n):
    inputs.append(list(map(int, sys.stdin.readline().split())))
  dp[0][0] = inputs[0][0]
  for i in range(1, n):
    for j in range(i + 1):
      if j == 0:
        dp[i][j] = dp[i - 1][j] + inputs[i][j]
        continue
      if j == i:
        dp[i][j] = dp[i - 1][j - 1] + inputs[i][j]
        continue
      dp[i][j] = max(dp[i - 1][j - 1] + inputs[i][j], dp[i - 1][j] + inputs[i][j])
  print(max(dp[n - 1]))

solution()