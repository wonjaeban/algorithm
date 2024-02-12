import sys

def solution():
  T = int(sys.stdin.readline())
  answer = []
  for _ in range(T):
    N = int(sys.stdin.readline())
    coins = list(map(int, sys.stdin.readline().split()))
    M = int(sys.stdin.readline())
    dp = [0 for _ in range(M+1)]
    dp[0] = 1
    for coin in coins:
      for i in range(M + 1):
        if i >= coin:
          dp[i] += dp[i - coin]

    answer.append(dp[M])

  for ans in answer:
    print(ans)
    
solution()