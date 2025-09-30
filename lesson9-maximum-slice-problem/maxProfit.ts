function maxProfitSolution(A: number[]): number {
  const N = A.length;

  if (N < 2) return 0;

  let maxProfit = 0;
  let minPrice = A[0];

  for (let i = 1; i < N; i++) {
    const profit = A[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (A[i] < minPrice) {
      minPrice = A[i];
    }
  }

  return maxProfit;
}
