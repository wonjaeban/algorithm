import sys



def solution():
  n = int(sys.stdin.readline())
  inputs = list(map(int, sys.stdin.readline().split()))


  dp = [0 for _ in range(n)]
  dp[0] = inputs[0]
  for i in range(1, n):
    dp[i] = max(dp[i - 1] + inputs[i], inputs[i])

  print(max(dp))

solution()