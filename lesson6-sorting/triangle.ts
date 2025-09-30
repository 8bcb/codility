function triangleSolution(A: number[]): number {
  const N = A.length;

  if (N < 3) {
    return 0;
  }

  const sortedA = [...A].sort((a, b) => a - b);

  for (let i = 0; i < N - 2; i++) {
    if (sortedA[i] <= 0) {
      continue;
    }

    if (sortedA[i] + sortedA[i + 1] > sortedA[i + 2]) {
      return 1;
    }
  }

  return 0;
}
