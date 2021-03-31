function solution(array, commands) {
  const answer = [];
  commands.forEach(arr => {
    const a = array.slice(arr[0] - 1, arr[1]);
    a.sort(function(a, b) {
      return a - b;
    });
    answer.push(a[arr[2] - 1]);
  });
  return answer;
}
