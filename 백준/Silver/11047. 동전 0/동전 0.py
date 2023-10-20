count = 0

N, K = map(int, input().split()) 
coin_lst = []
for _ in range(N):
    coin_lst.append(int(input()))

coin_lst.sort(reverse=True)

for coin in coin_lst:
  if (K // coin) > 0:
    count += (K // coin)
    K -= ((K // coin) * coin)
print(count)