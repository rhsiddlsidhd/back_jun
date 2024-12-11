const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim();
/**
 *  숫자 22 이후는 JS가 표현할 수 있는 숫자의 범위 한계를 넘어서서 0을 반환한다.
 */

// const solution = (n) => {
//   let answer = 1;
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     answer *= i;
//   }

//   answer = [...answer.toString()];
//   for (let j = answer.length - 1; j >= 0; j--) {
//     if (answer[j] === "0") {
//       count++;
//     } else {
//       break;
//     }
//   }

//   return count;
// };

// solution(Number(22));

/**
 * 0~4 0
 * 5~9 1
 * 10~14 2
 * 15~19 3
 * 20~24 4
 * 25~29 6
 *  */

const solution = (n) => {
  let count = 0;

  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return count;
};
console.log(solution(Number(input)));
