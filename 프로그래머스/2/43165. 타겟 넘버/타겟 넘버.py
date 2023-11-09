def solution(numbers, target):
    answer = 0
    def dfs(index, sum):
        nonlocal answer
        if index == len(numbers):
            if sum == target:
                answer += 1
            return
        dfs(index + 1, sum + numbers[index])
        dfs(index + 1, sum - numbers[index])
    dfs(0, 0)
    return answer