/**
 * Will complete after a time delay
 *
 * @example
 * it('Test', async () => {
 *    await delay(100);
 * });
 */
export const delay = (ms?: number): Promise<void> => new Promise(res => setTimeout(res, ms ?? 0));
