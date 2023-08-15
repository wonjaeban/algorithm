n, m, k = map(int, input().split())
data = list(map(int, input().split()))
data.sort()
biggest = data[n - 1]
second = data[n - 2]
sum = 0

while True:
  for i in range(k):
    if(m == 0):
      break
    sum += biggest
    m -= 1
  if(m == 0):
    break
  sum += second
  m -= 1

print(sum)