import sys

def solution():
  N = int(sys.stdin.readline())
  numbers = list(map(int, sys.stdin.readline().split()))
  dp = [1 for _ in range(N)]

  for i in range(1, N):
    for j in range(i):
      if numbers[i] < numbers[j]:
        dp[i] = max(dp[i], dp[j] + 1)
  
  print(max(dp))
    
    
solution()