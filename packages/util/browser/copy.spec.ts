import { copy } from './copy';

describe('abc: utils', () => {
  describe('#copy', () => {
    it('should be copy a string', () => {
      const writeTextSpy = spyOn(navigator.clipboard, 'writeText');
      copy('test');
      expect(writeTextSpy).toHaveBeenCalled();
    });
  });
});
