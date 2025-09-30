function countFactorsSolution(N: number): number {
  let count = 0;
  let i = 1;

  while (i * i < N) {
    if (N % i === 0) {
      count += 2;
    }
    i++;
  }

  if (i * i === N) {
    count += 1;
  }

  return count;
}
