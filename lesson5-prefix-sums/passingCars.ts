function passingCarsSolution(A: number[]): number {
  const LIMIT = 1_000_000_000;

  let passingPairs = 0;
  let eastboundCars = 0;

  for (const car of A) {
    if (car === 0) {
      eastboundCars++;
    } else {
      passingPairs += eastboundCars;

      if (passingPairs > LIMIT) {
        return -1;
      }
    }
  }

  return passingPairs;
}
