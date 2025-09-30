function frogJmpSolution(X: number, Y: number, D: number): number {
  const distance = Y - X;

  return Math.ceil(distance / D);
}
