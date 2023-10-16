def solution(routes):
  routes.sort(key = lambda x: x[1])
  new_camera_position = -30001
  answer = 0
  for route in routes:
    if new_camera_position < route[0]:
      answer += 1
      new_camera_position = route[1]
  return answer