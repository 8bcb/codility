function tapeEquilibriumSolution(A: number[]): number {
  const N = A.length;

  let totalSum = 0;
  for (let i = 0; i < N; i++) {
    totalSum += A[i];
  }

  let leftSum = 0;
  let minDifference = Infinity;

  for (let P = 1; P < N; P++) {
    leftSum += A[P - 1];

    const rightSum = totalSum - leftSum;

    const difference = Math.abs(leftSum - rightSum);

    minDifference = Math.min(minDifference, difference);
  }

  return minDifference;
}
