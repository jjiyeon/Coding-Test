/**
 * 큰 수 만들기
 * 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
 * number는 1자리 이상 1,000,000자리 이하인 숫자
 * k는 1이상 number의 자릿수 미만인 자연수
 *
 * 접근
 * 큰 값이 나오면 이전 값 중 더 작은 값은 전부 삭제
 * 스택의 바닥에서부터 탑은 큰 수 부터 작은 수로 나열이 되어야 한다.
 * @param {*} number
 * @param {*} k
 */

function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }
  //9876543 일 경우에는
  while (count < k) {
    stack.pop();
    count += 1;
  }
  console.log(stack.join(""));
  return stack.join("");
}
