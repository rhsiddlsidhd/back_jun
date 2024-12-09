// dev/stdin
const input = require("fs").readFileSync("example.txt").toString().split("\n");
const [count, divisorEl] = input;
const $divisorEl = divisorEl.split(" ").map(Number);
function solution(divisorEl) {
  let n;

  n = Math.max(...divisorEl) * Math.min(...divisorEl);

  return n;
}

console.log(solution($divisorEl));
