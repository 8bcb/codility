function binaryGapSolution(N: number): number {
  const binary = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;
  let insideGap = false;

  for (const bit of binary) {
    if (bit === '1') {
      if (insideGap) {
        maxGap = Math.max(maxGap, currentGap);
      }
      insideGap = true;
      currentGap = 0;
    } else if (insideGap) {
      currentGap++;
    }
  }

  return maxGap;
}
