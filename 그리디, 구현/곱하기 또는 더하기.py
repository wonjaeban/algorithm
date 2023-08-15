inputs = input()
nums = [int(digit) for digit in inputs]
result = nums[0]
nums.pop(0)
for i in nums:
  if (i == 0 or result == 0):
    result += i
  else:
    result *= i
print(result)
