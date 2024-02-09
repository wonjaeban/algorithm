import sys

def solution():
  N = int(sys.stdin.readline())
  if N % 2 == 0:
    print('CY')
  else:
    print('SK')
    
solution()