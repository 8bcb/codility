function countDivSolution(A: number, B: number, K: number): number {
  const multiplesUpToB = Math.floor(B / K);

  const multiplesBeforeA = Math.floor((A - 1) / K);

  return multiplesUpToB - multiplesBeforeA;
}
