function missingIntegerSolution(A: number[]): number {
  const N = A.length;

  const present = new Set<number>();

  for (const num of A) {
    if (num > 0 && num <= N) {
      present.add(num);
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!present.has(i)) {
      return i;
    }
  }

  return N + 1;
}
