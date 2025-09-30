function maxCountersSolution(N: number, A: number[]): number[] {
  const counters = new Array(N).fill(0);
  let currentMax = 0;
  let baselineValue = 0;

  for (const operation of A) {
    if (operation >= 1 && operation <= N) {
      const index = operation - 1;

      if (counters[index] < baselineValue) {
        counters[index] = baselineValue;
      }

      counters[index]++;

      if (counters[index] > currentMax) {
        currentMax = counters[index];
      }
    } else if (operation === N + 1) {
      baselineValue = currentMax;
    }
  }

  for (let i = 0; i < N; i++) {
    if (counters[i] < baselineValue) {
      counters[i] = baselineValue;
    }
  }

  return counters;
}
