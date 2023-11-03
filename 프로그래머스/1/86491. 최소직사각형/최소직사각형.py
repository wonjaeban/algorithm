def solution(sizes):
    largest = 0
    other_size = 0
    for size in sizes:
        if largest < max(size):
            largest = max(size)
        if other_size < min(size):
            other_size = min(size)
    
    answer = largest * other_size
    return answer