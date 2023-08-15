n = int(input())
afraid_list = list(map(int, input().split()))
afraid_list.sort()
count = 0
while True:
  if (afraid_list[-1] >= len(afraid_list)):
    count += 1
    break
  else:
    for i in range(afraid_list[-1] - 1):
      afraid_list.pop(0)
    afraid_list.pop(-1)
    count += 1

print(count)