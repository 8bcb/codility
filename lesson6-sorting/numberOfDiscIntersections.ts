function numberOfDiscIntersectionsSolution(A: number[]): number {
  const N = A.length;
  if (N === 0) return 0;

  const LIMIT = 10_000_000;

  const starts: number[] = [];
  const ends: number[] = [];

  for (let i = 0; i < N; i++) {
    starts.push(i - A[i]);
    ends.push(i + A[i]);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let intersections = 0;
  let activeDiscs = 0;
  let endIndex = 0;

  // Process each disc start event
  for (let i = 0; i < N; i++) {
    const currentStart = starts[i];

    // Close all discs that end before this disc starts
    while (endIndex < N && ends[endIndex] < currentStart) {
      activeDiscs--;
      endIndex++;
    }

    // Current disc intersects with all currently active discs
    intersections += activeDiscs;

    if (intersections > LIMIT) {
      return -1;
    }

    // Add this disc to active discs
    activeDiscs++;
  }

  return intersections;
}
