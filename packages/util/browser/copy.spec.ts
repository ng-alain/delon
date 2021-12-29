import { copy } from './copy';

describe('abc: utils', () => {
  describe('#copy', () => {
    it('should be copy a string', async () => {
      try {
        await copy('test');
        expect(true).toBe(true);
      } catch (ex) {
        expect(false).toBe(true);
      }
    });
  });
});
