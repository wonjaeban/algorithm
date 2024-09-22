function solution(tickets) {
  const answer = [];
  const len = tickets.length;
	const visited = Array(len).fill(false);

	const dfs = (routes) => {
    if (routes.length === len + 1) answer.push(routes);

    for (const idx in tickets) {
      const [start, end] = tickets[idx];
      if (!visited[idx]) {
        if (routes.at(-1) === start) {
          visited[idx] = true;
          dfs([...routes, end]);
          visited[idx] = false;
        }
      }
    }
  };

  dfs(["ICN"]);

  return answer.sort()[0];
}