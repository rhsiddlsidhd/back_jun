/**
 * 방문 길이
 */

function isValidMove(x, y) {
  console.log(x, y);
  return x >= -5 && x <= 5 && y >= -5 && y <= 5;
}

function solution(dirs) {
  const visited = new Set();
  let x = 0,
    y = 0;
  for (const dir of dirs) {
    let nx = x,
      ny = y;

    switch (dir) {
      case "U":
        ny += 1;
        break;
      case "D":
        ny -= 1;
        break;
      case "R":
        nx += 1;
        break;
      case "L":
        nx -= 1;
        break;
    }

    if (!isValidMove(nx, ny)) {
      continue;
    }

    const move = `${x},${y}-${nx},${ny}`;
    const reverseMove = `${nx},${ny}-${x},${y}`;

    if (!visited.has(move) && !visited.has(reverseMove)) {
      visited.add(move);
    }

    [x, y] = [nx, ny];
  }

  return visited.size;
}

solution("LULLLLLLU");
