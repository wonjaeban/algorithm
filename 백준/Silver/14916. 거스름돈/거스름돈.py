import sys

def solution():
  N = int(sys.stdin.readline())
  dp = [0 for _ in range(N+1)]
  dp[1] = -1
  for i in range(2, N + 1):
    if i % 5 == 0:
      dp[i] = dp[i - 5] + 1
    elif i == 3:
      dp[i] = -1
    else:
      dp[i] = dp[i - 2] + 1
   
  print(dp[N])
    
solution()