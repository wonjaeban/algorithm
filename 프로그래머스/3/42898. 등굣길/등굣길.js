function solution(m, n, puddles) {
  // m이 가로의 길이, n이 세로의 길이.
  const matrix = Array.from({ length: n }).map((v) =>
    Array.from({ length: m }).fill(1)
  );

  // 물 웅덩이는 0으로 센다.
  puddles.forEach(([m, n]) => {
    matrix[n - 1][m - 1] = 0;
  });

  // 해당 칸의 값이 0이라면 물 웅덩이를 지나는 경로이므로 값을 0으로 설정
  // 첫 행 첫 열일 경우 값을 1로 초기화
  // 이 외의 첫 행일 경우 위에서 오는 경로는 없으므로 왼쪽에서 오는 경로만 센다.
  // 첫 열일 경우 왼쪽에서 오는 경로는 없으므로 위에서 오는 경로만 센다.
  // 나머지는 위에서 오는 경로의 개수와 왼쪽에서 오는 경로의 개수를 더해준다.
  const result = matrix.reduce((prev, row, i) => {
    return row.reduce((a, v, j) => {
      a[j] =
        (v === 0 ? v : i === 0 ? a[j - 1] ?? 1 : prev[j] + (a[j - 1] ?? 0)) %
        1000000007;
      return a;
    }, []);
  }, []);

  return result[m - 1];
}