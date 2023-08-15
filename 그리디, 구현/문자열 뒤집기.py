num_string = input()
first_num = num_string[0]
result = 0
already_count = False

for num in num_string:
  if(num != first_num and not already_count):
    result += 1
    already_count = True
  elif(num == first_num):
    already_count = False

print(result)
    