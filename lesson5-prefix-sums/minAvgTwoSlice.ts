function minAvgTwoSlice(A: number[]): number {
  const N = A.length;

  let minAvg = Infinity;
  let minPosition = 0;

  for (let i = 0; i < N - 1; i++) {
    const avg2 = (A[i] + A[i + 1]) / 2;
    if (avg2 < minAvg) {
      minAvg = avg2;
      minPosition = i;
    }

    if (i < N - 2) {
      const avg3 = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (avg3 < minAvg) {
        minAvg = avg3;
        minPosition = i;
      }
    }
  }

  return minPosition;
}
