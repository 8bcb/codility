function frogRiverOneSolution(X: number, A: number[]): number {
  const covered = new Set<number>();

  for (let i = 0; i < A.length; i++) {
    covered.add(A[i]);

    if (covered.size === X) {
      return i;
    }
  }

  return -1;
}
