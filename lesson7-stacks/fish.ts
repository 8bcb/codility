function fishSolution(A: number[], B: number[]): number {
  const downStreamStack: number[] = [];

  const length = A.length;
  let survivors = 0;

  let alive = false;

  for (let i = 0; i < length; i++) {
    if (B[i] == 1) {
      downStreamStack.push(i);
    } else {
      alive = true;
      while (downStreamStack.length > 0 && alive) {
        const curentDownstreamFish = downStreamStack[downStreamStack.length - 1];

        if (A[i] > A[curentDownstreamFish]) {
          downStreamStack.pop();
        } else {
          alive = false;
        }
      }
      if (alive) {
        survivors++;
      }
    }
  }
  return survivors + downStreamStack.length;
}
