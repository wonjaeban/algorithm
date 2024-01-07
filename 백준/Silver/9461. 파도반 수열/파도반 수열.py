import sys
        

def solution():
  dp = [0 for _ in range(101)]
  dp[1] = 1
  dp[2] = 1
  dp[3] = 1
  inputs = []
  T = int(sys.stdin.readline())
  for _ in range(T):
    n = int(sys.stdin.readline())
    inputs.append(n)

  max_val = max(inputs)
  for i in range(4, max_val + 1):
    dp[i] = dp[i - 2] + dp[i - 3]
  for n in inputs:
    print(dp[n])
    
solution()