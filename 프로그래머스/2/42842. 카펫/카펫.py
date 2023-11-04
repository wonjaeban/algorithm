def solution(brown, yellow):
    total = brown + yellow
    width = 3
    height= 3
    while width <= total:
        if total % width == 0:
            if total - (2 * width) - (2 * (total // width)) + 4 == yellow:
                width = max(width, total // width)
                height = total // width
                break
        width += 1
    return [width, height]