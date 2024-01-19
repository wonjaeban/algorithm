import sys



def solution():
  T = int(sys.stdin.readline())
  answer = []
  for _ in range(T):
    n = int(sys.stdin.readline())
    inputs = []
    inputs.append(list(map(int, sys.stdin.readline().split()))) 
    inputs.append(list(map(int, sys.stdin.readline().split()))) 

    dp = [[0 for _ in range(n)] for _ in range(2)]
    
    dp[0][0] = inputs[0][0]
    dp[1][0] = inputs[1][0]
    if n > 1:
      dp[0][1] = inputs[0][1] + inputs[1][0]
      dp[1][1] = inputs[1][1] + inputs[0][0]
    
    for i in range(2, n):
      dp[0][i] = max(dp[1][i-1], dp[1][i-2]) + inputs[0][i]
      dp[1][i] = max(dp[0][i-1], dp[0][i-2]) + inputs[1][i]
    answer.append(max(max(dp[0]), max(dp[1])))

  for elemet in answer:
    print(elemet)
    
solution()