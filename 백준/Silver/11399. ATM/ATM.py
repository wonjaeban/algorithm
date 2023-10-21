sum = 0
answer = 0

N = int(input()) 
  
time_list = list(map(int, input().split()))

time_list.sort()

for time in time_list:
  sum += time
  answer += sum
    
    
print(answer)