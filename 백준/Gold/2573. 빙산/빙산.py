import sys

# 입력 받기
row_len, col_len = map(int, input().split())
arr = []
for _ in range(row_len):
    arr.append(list(map(int, sys.stdin.readline().split())))

ice = {}  # 얼음 좌표만 모은 dict - 키: tuple(행, 열), 값: 1(얼음 있음) or 0(얼음 없음)
for i in range(1, row_len-1):  # 첫 번째 행과 열, 마지막 행과 열에는 얼음이 없으니 1부터 마지막 전까지 반복
    for j in range(1, col_len-1):
        if arr[i][j]:
            ice[(i, j)] = 1  # 얼음이 있는 부분 ice에 추가

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]


def DFS(row_i, col_i):
    linked_ice = [(row_i, col_i)]  # 현재 얼음에 연결된 얼음 좌표들을 추가할 stack

    while linked_ice:  # 연결된 얼음이 있는 동안 반복
        item = linked_ice.pop()
        if not visited_ice[item[0]][item[1]]:
            visited_ice[item[0]][item[1]] = True

            water_count = 0  # 상하좌우 중에 바다인 곳 개수

            for i in range(4):
                row = item[0] + dy[i]
                col = item[1] + dx[i]

                # 얼음이었다가 물이 된 부분을 재탐색 하는 것 방지 (얼음이었다가 이번 해에 물이 된 부분은 True로 바뀌어있음)
                if not visited_ice[row][col]:
                    if arr[row][col] <= 0:  # 바다이면
                        water_count += 1
                    else:  # 빙산이면
                        linked_ice.append((row, col))

            arr[item[0]][item[1]] -= water_count

            if arr[item[0]][item[1]] <= 0:  # 높이가 0보다 같거나 작아지면 빙산 녹음 처리
                ice[(item[0], item[1])] = 0


year = 0
while sum(ice.values()) > 0:  # 얼음이 전부 녹을때까지 반복
    dfs_count = 1  # DSF 탐색 횟수 == 빙산 덩어리 수
    visited_ice = [[False]*col_len for _ in range(row_len)]

    for key, value in ice.items():
        if value and not visited_ice[key[0]][key[1]]:
            if dfs_count == 2:  # 빙산 덩어리가 2가 되면 for문 종료
                print(year)
                break
            DFS(key[0], key[1])
            dfs_count += 1
    else:  # 빙산 덩어리가 2가 되지 않았으면 while문 반복
        year += 1
        continue
    break  # 빙산 덩어리가 2가 되었으면 while문 종료

else:
    print(0)