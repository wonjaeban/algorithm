def solution(numbers, target):
    n = len(numbers)
    count = 0
    def dfs(idx, result):
        if idx == n:
            if result == target:
                nonlocal count
                count += 1
            return
        else:
            dfs(idx+1, result+numbers[idx])
            dfs(idx+1, result-numbers[idx])
    dfs(0,0)   
    return count