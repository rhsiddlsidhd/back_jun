const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
input.shift();
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  console.log(lcm(a, b));
}
