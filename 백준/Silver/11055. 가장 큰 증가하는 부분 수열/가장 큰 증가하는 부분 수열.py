import sys

def solution():
  N = int(sys.stdin.readline())
  numbers = list(map(int, sys.stdin.readline().split()))
  dp = [1 for _ in range(N)]
  dp[0] = numbers[0]

  for i in range(1, N):
    for j in range(i):
      if numbers[i] > numbers[j]:
        dp[i] = max(dp[i], dp[j] + numbers[i])
      else:
        dp[i] = max(dp[i], numbers[i])
  
  print(max(dp))
    
solution()