//500000000000000000 500000000000000002 RangeError: Invalid string length
const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(Number);

function solution(a, b) {
  const num1 = Array(a).fill(1).join("");
  const num2 = Array(b).fill(1).join("");
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  return gcd(+num1, +num2);
}

console.log(solution(num1, num2));
