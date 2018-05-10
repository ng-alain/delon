import { yuan, format } from './string';

describe('util: string', () => {
  describe('#format', () => {
    [
      { s: 'this is ${name}', o: { name: 'asdf' }, r: 'this is asdf' },
      { s: 'this is ${name}, age: ${age}', o: { name: 'asdf', age: 10 }, r: 'this is asdf, age: 10' }
    ].forEach(
      item => {
        it(item.s, () => {
          expect(format(item.s, item.o)).toBe(item.r);
        });
      },
    );
    it('should allow null string', () => {
      expect(format(null, {})).toBe('');
    });
    it('should be support non-exists obj value', () => {
      expect(format('this is ${name}', { })).toBe('this is ');
    });
    it('should be support invalid object (eg: null, undefined)', () => {
      expect(format('this is ${name}', null)).toBe('this is ');
      expect(format('this is ${name}', undefined)).toBe('this is ');
    });
    it('should be deep get value', () => {
      expect(format('this is ${user.name}', { user: { name: 'asdf' } }, true)).toBe('this is asdf');
    });
  });
  describe('#yuan', () => {
    it('should be', () => {
      expect(yuan(100)).toBe(`&yen 100.00`);
    });
    it('should be a string', () => {
      expect(yuan('100')).toBe(`&yen 100`);
    });
    it('should be keeping only two decimals', () => {
      expect(yuan(100.456, 2)).toBe(`&yen 100.46`);
    });
  });
});
