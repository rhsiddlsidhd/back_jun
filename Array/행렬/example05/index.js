/**
 * 행렬의 곱셈
 */

const solution = (arr1, arr2) => {
  const m1 = arr1.length;
  const n1 = arr1[0].length;
  const m2 = arr2.length;
  const n2 = arr2[0].length;

  const result = Array.from({ length: m1 }, () => Array(n2).fill(0));

  for (let i = 0; i < m1; i++) {
    for (let j = 0; j < n2; j++) {
      for (let k = 0; k < n1; k++) {
        console.log("k", k);
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  console.log(result);
};

solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);
