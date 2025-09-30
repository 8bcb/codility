function cyclicRotationSolution(A: number[], K: number): number[] {
  const N = A.length;

  if (N === 0 || K === 0) {
    return A;
  }

  K = K % N;

  if (K === 0) {
    return A;
  }

  const result = new Array(N);

  for (let i = 0; i < N; i++) {
    result[(i + K) % N] = A[i];
  }

  return result;
}
