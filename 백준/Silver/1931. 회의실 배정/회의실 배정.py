count = 0

N = int(input()) 
time_list = []
for _ in range(N):
  time_list.append(list(map(int, input().split())))

time_list.sort(key= lambda x: x[0])
time_list.sort(key= lambda x: x[1])
last_time = -1

for time in time_list:
  if time[0] >= last_time:
    count += 1
    last_time = time[1]
    
print(count)