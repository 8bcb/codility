function oddOccurencesInArraySolution(A: number[]): number {
  const countMap = new Map<number, number>();

  for (const num of A) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const [num, count] of countMap) {
    if (count % 2 === 1) {
      return num;
    }
  }

  return -1;
}
