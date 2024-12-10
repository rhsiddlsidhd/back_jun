const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(Number);

function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  console.log(gcd(num1, num2));
  console.log(lcm(num1, num2));
}

solution(num1, num2);
