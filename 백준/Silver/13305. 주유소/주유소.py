N = int(input())
distance_arr = list(map(int, input().split()))
oil_arr = list(map(int, input().split()))
oil_price = oil_arr[0]
cost = 0
  
for idx, new_oil in enumerate(oil_arr):
  if idx == len(oil_arr) - 1:
    break
  if new_oil < oil_price:
    oil_price = new_oil
  cost += (oil_price * distance_arr[idx])
print(cost)