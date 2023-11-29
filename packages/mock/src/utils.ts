/**
 * Used to simulate delays
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Return a random number
 */
export function r(min = 1, max = 100): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
