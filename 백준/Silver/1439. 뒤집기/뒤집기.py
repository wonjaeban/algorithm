num_str = input()
zero_count = 0
one_count = 0
for idx, num in enumerate(num_str):
  if idx == 0:
    if num == '0':
      zero_count += 1
    else:
      one_count += 1
  elif num == '0' and num_str[idx - 1] == '1':
    zero_count += 1
  elif num == '1' and num_str[idx - 1] == '0':
    one_count += 1
print(min(zero_count, one_count))