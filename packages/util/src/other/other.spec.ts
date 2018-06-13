import { deepGet, deepCopy, copy } from './other';

describe('abc: utils', () => {
  describe('#deepGet', () => {
    const tree = {
      responsne: {
        list: [],
        total: 10,
      },
      status: 'ok',
    };
    it('should be get [status]', () => {
      expect(deepGet(tree, ['status'])).toBe(tree.status);
    });
    it('should be get [responsne.totle]', () => {
      expect(deepGet(tree, ['responsne', 'total'])).toBe(tree.responsne.total);
    });
    it('should be return default value when not exist key', () => {
      const def = 'aa';
      expect(deepGet(tree, ['status11'], def)).toBe(def);
    });
    it('should be return default value when not exist deep key', () => {
      const def = 'aa';
      expect(deepGet(tree, ['responsne', 'totala'], def)).toBe(def);
    });
    it('should be return default value when path is null', () => {
      const def = 'aa';
      expect(deepGet(tree, null, def)).toBe(def);
    });
    it('should be return default value when path is empty array', () => {
      const def = 'aa';
      expect(deepGet(tree, [], def)).toBe(def);
    });
    it('should be return default value when source object is null', () => {
      const def = 'aa';
      expect(deepGet(null, ['status11'], def)).toBe(def);
    });
    it('should be dot get', () => {
      expect(deepGet(tree, 'responsne.total')).toBe(tree.responsne.total);
    });
    it('should be string path', () => {
      expect(deepGet(tree, 'status')).toBe(tree.status);
    });
    it('should be return default value when paths include null value', () => {
      expect(
        deepGet({ res: {} }, 'res.address.city'),
      ).toBeUndefined();
    });
  });

  it('#deepCopy', () => {
    const a = { number: 1 };
    expect(deepCopy(a).number).toBe(a.number);
  });

  describe('#copy', () => {
    it('should be copy a string', (done: () => void) => {
      copy('test')
        .then(() => {
          expect(true).toBe(true);
          done();
        })
        .catch(() => {
          expect(false).toBe(true);
          done();
        });
    });
    it('[[boundary]]', (done: () => void) => {
      spyOn(document, 'createElement').and.returnValue({ parentNode: null });
      copy('test')
        .then(() => {
          expect(false).toBe(true);
          done();
        })
        .catch(() => {
          expect(true).toBe(true);
          done();
        });
    });
  });
});
