import sys

def check_if_multi_2(num):
  if num % 2 == 0:
    return num // 2
  else:
    return -1

def check_if_multi_3(num):
  if num % 3 == 0:
    return num // 3
  else:
    return -1


def solution():
  N = int(sys.stdin.readline())

  dp = [0 for _ in range(N + 1)]
  if N >= 1:
    dp[1] = 0
    if N >= 2:
      dp[2] = 1
      if N >= 3:
        dp[3] = 1
  for i in range(4, N+1):
    list = [i -1]
    min = 10000001
    if check_if_multi_2(i) > 0:
      list.append(check_if_multi_2(i))
    if check_if_multi_3(i) > 0:
      list.append(check_if_multi_3(i))
    for ele in list:
      if dp[ele] < min:
        min = dp[ele]
    dp[i] = min + 1

  print(dp[N])


solution()