from itertools import permutations

def solution(numbers):
    nums_array = []
    nums = [n for n in numbers] 
    for i in range(1, len(nums) + 1):
        nums_array += list(permutations(nums, i))
    new_nums = [int(("").join(nums)) for nums in nums_array] 
    answer = []

    for num in new_nums:
      is_prime = True
      if num <= 1:
        is_prime = False
        continue
      for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
          is_prime = False
      if is_prime == True:
        answer.append(num)
      
      
    return len(set(answer))