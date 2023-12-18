import sys
        

def solution():
  dp = [0] * 12
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4
  T = int(sys.stdin.readline())
  inputs = []
  for _ in range(T):
    inputs.append(int(sys.stdin.readline()))

  for i in range(4, 12):
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

  for element in inputs:
    print(dp[element])
    
solution()