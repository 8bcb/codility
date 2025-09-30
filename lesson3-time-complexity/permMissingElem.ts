function permMissingElemSolution(A: number[]): number {
  const N = A.length;
  const present = new Set<number>();

  for (const num of A) {
    present.add(num);
  }

  for (let i = 1; i <= N + 1; i++) {
    if (!present.has(i)) {
      return i;
    }
  }

  return -1;
}
