export function score(x: number, y: number): number {
  const dist = Math.sqrt(x * x + y * y);
  if (dist <= 1) return 10;
  if (dist <= 5) return 5;
  if (dist <= 10) return 1;
  return 0;
}
