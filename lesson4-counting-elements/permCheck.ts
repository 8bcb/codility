function permCheckSolution(A: number[]): number {
  const N = A.length;
  const seen = new Set<number>();

  for (const num of A) {
    if (num < 1 || num > N) {
      return 0;
    }

    if (seen.has(num)) {
      return 0;
    }

    seen.add(num);
  }

  return 1;
}
