import { omit } from './object';

describe('util.#object', () => {
  describe('#omit', () => {
    it('should omit an array of keys from the object', () => {
      const res = omit({ a: 1, b: 2, c: 3 }, ['a', 'c']);
      expect(res.a).toBeUndefined();
      expect(res.b).toBe(2);
      expect(res.c).toBeUndefined();
    });

    it('should omit a key from the object', () => {
      const res = omit({ a: 1, b: 2, c: 3 }, 'a');
      expect(res.a).toBeUndefined();
      expect(res.b).toBe(2);
      expect(res.c).toBe(3);
    });

    it('should return the object if no keys are given', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const res = omit(obj);
      expect(res.a).toBe(1);
      expect(res.b).toBe(2);
      expect(res.c).toBe(3);
      expect(obj).not.toBe(res);
    });

    it('should return new emtpy object if data is null', () => {
      expect(typeof omit(null)).toBe('object');
    });

    it('should be custom function', () => {
      const res = omit({ a: 1, b: 2 }, key => key === 'a');
      expect(res.a).toBe(1);
      expect(res.b).toBeUndefined();

      const res2 = omit({ a: 1, b: 2, c: 3 }, ['b'], key => key === 'c');
      expect(res2.a).toBeUndefined();
      expect(res2.b).toBeUndefined();
      expect(res2.c).toBe(3);
    });
  });
});
