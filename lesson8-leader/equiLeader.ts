function findLeader(A: number[]): { value: number; count: number } {
  const n = A.length;

  const sortedA = [...A].sort((a, b) => a - b);

  const candidate = sortedA[Math.floor(n / 2)];

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] === candidate) {
      count++;
    }
  }

  return {
    value: count > Math.floor(n / 2) ? candidate : -1,
    count: count > Math.floor(n / 2) ? count : 0,
  };
}

function equiLeaderSolution(A: number[]): number {
  const n = A.length;

  const leaderInfo = findLeader(A);

  if (leaderInfo.value === -1) {
    return 0;
  }

  const leader = leaderInfo.value;
  const totalLeaderCount = leaderInfo.count;

  let equiLeaders = 0;
  let leftLeaderCount = 0;

  for (let s = 0; s < n - 1; s++) {
    if (A[s] === leader) {
      leftLeaderCount++;
    }

    const leftSize = s + 1;
    const rightSize = n - leftSize;
    const rightLeaderCount = totalLeaderCount - leftLeaderCount;

    const leftHasLeader = leftLeaderCount > Math.floor(leftSize / 2);

    const rightHasLeader = rightLeaderCount > Math.floor(rightSize / 2);

    if (leftHasLeader && rightHasLeader) {
      equiLeaders++;
    }
  }

  return equiLeaders;
}
