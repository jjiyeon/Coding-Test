//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  const result = arr.filter(element => !(element % divisor));
  if (result.length > 0) {
    result.sort((a, b) => {
      return a - b;
    });
    return result;
  } else {
    result.push(-1);
    return result;
  }
}
/*
  arr = [5, 9, 7, 10]	divisor = 5	-> [5, 10]
  arr = [2, 36, 1, 3]	divisor = 1 -> [1, 2, 3, 36]
  arr = [3,2,6]	divisor = 10 -> [-1]
*/
const arr = [3, 2, 6];
console.log(solution(arr, 10));
