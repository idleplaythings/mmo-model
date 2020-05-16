export const isAdjacent = (p1, p2) => {
  if (Math.abs(p1.x - p2.x) > 1 || Math.abs(p1.y - p2.y) > 1) {
    return false;
  }

  return true;
};
