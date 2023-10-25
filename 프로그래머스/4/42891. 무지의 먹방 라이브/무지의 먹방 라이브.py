import heapq

def solution(food_times, k):
  heap = []
  for idx, food in enumerate(food_times):
    heapq.heappush(heap, (food, idx+1))

  prev_sum = 0

  while heap:
    food = heap[0][0]
    if (food - prev_sum) * len(heap) <= k:
      k -= ((food - prev_sum) * len(heap))
      heapq.heappop(heap)
      prev_sum = food
    else:
      heap.sort(key=lambda x: x[1])
      return heap[k % len(heap)][1]
  return -1