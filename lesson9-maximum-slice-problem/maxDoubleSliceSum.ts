function maxDoubleSliceSolution(A: number[]): number {
  const length = A.length;

  const maxLeftSum: number[] = Array.from({ length }, () => 0);
  const maxRightSum: number[] = Array.from({ length }, () => 0);

  for (let i = 1; i < length - 1; i++) {
    maxLeftSum[i] = Math.max(0, maxLeftSum[i - 1] + A[i]);
  }

  for (let i = length - 2; i > 0; i--) {
    maxRightSum[i] = Math.max(0, maxRightSum[i + 1] + A[i]);
  }

  let maxSum = 0;
  for (let i = 1; i < length - 1; i++) {
    maxSum = Math.max(maxLeftSum[i - 1] + maxRightSum[i + 1], maxSum);
  }

  return maxSum;
}
