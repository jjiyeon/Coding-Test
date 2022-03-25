const num = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  const queue = [1];
  while (queue.length > 0) {
    const src = queue.shift();
    console.log("1 shift src : " + src);
    for (const dest of graph[src]) {
      console.log("2. for dest :" + dest);
      if (distance[dest] === 0) {
        queue.push(dest);
        console.log(queue);
        distance[dest] = distance[src] + 1;
        console.log(distance);
      }
    }
    console.log("==========================");
  }

  console.log(distance);
}

solution(num, vertex);
