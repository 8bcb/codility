function maxProductOfThreeSolution(A: number[]): number {
  A.sort((a, b) => a - b);

  const n = A.length;

  const option1 = A[n - 3] * A[n - 2] * A[n - 1];
  const option2 = A[0] * A[1] * A[n - 1];

  return Math.max(option1, option2);
}
