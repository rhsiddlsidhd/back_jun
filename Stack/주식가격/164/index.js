/**
 *
 * n초 간의 주가를 초 단위로 기록한 배열 prices가 매개변수로 주어질 때, 각 초의 주가를 기준으로 해당 초부터 n초 사이에 가격이 떨어지지 않는 시간은 몇 초인지 배열에 담아 반환하는 solution 함수를 완성하세요.
 *
 * 입력 [1,2,3,2,3]
 * 출력 [4,3,1,1,0]
 */

const solution = (prices) => {
  const total = prices.length;
  const stack = [];
  const answer = new Array(total).fill(0);

  for (let i = 0; i < total; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      // 유지시간 = 현재 index - 이전 index
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = total - 1 - j;
  }
  return answer;
};

console.log(solution([1, 2, 3, 2, 3]));
