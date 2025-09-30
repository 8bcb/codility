function genomicRangeQuery(S: string, P: number[], Q: number[]): number[] {
  const N = S.length;
  const M = P.length;

  const prefixA = new Array(N + 1).fill(0);
  const prefixC = new Array(N + 1).fill(0);
  const prefixG = new Array(N + 1).fill(0);

  for (let i = 0; i < N; i++) {
    prefixA[i + 1] = prefixA[i] + (S[i] === 'A' ? 1 : 0);
    prefixC[i + 1] = prefixC[i] + (S[i] === 'C' ? 1 : 0);
    prefixG[i + 1] = prefixG[i] + (S[i] === 'G' ? 1 : 0);
  }

  const result: number[] = [];

  for (let k = 0; k < M; k++) {
    const start = P[k];
    const end = Q[k];

    if (prefixA[end + 1] - prefixA[start] > 0) {
      result.push(1);
    } else if (prefixC[end + 1] - prefixC[start] > 0) {
      result.push(2);
    } else if (prefixG[end + 1] - prefixG[start] > 0) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;
}
