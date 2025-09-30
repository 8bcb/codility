function maxSliceSumSolution(A: number[]): number {
  let maxSliceSum = A[0];
  let currentMax = A[0];

  for (let i = 1; i < A.length; i++) {
    currentMax = Math.max(A[i], currentMax + A[i]);
    maxSliceSum = Math.max(maxSliceSum, currentMax);
  }

  return maxSliceSum;
}
