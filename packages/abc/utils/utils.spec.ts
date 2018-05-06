import {
  yuan,
  fixedZero,
  getTimeDistance,
  deepGet,
  deepCopy,
  copy,
} from './utils';
import * as format from 'date-fns/format';

describe('abc: utils', () => {
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

  describe('#fixedZero', () => {
    it('less than 10', () => {
      expect(fixedZero(8)).toBe('08');
    });
    it('greater than 10', () => {
      expect(fixedZero(18)).toBe(18);
    });
  });

  describe('#getTimeDistance', () => {
    let time: Date;
    const FORMAT = 'YYYY-MM-DD';
    const NOW = '2018-03-05';
    beforeEach(() => {
      time = new Date(2018, 2, 5, 0, 0, 0, 0);
    });
    it('should be now when no-specity', () => {
      const ret = getTimeDistance('-today');
      expect(ret.length).toBe(2);
      expect(format(ret[0], FORMAT)).toBe(format(new Date(), FORMAT));
      expect(format(ret[1], FORMAT)).toBe(format(new Date(), FORMAT));
    });
    it('should be now when a bad date', () => {
      const ret = getTimeDistance('-today', -NaN);
      expect(ret.length).toBe(2);
      expect(format(ret[0], FORMAT)).toBe(format(new Date(), FORMAT));
      expect(format(ret[1], FORMAT)).toBe(format(new Date(), FORMAT));
    });
    describe('[today]', () => {
      it('past', () => {
        const ret = getTimeDistance('-today', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe(NOW);
        expect(format(ret[1], FORMAT)).toBe(NOW);
      });
      it('feture', () => {
        const ret = getTimeDistance('today', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe(NOW);
        expect(format(ret[1], FORMAT)).toBe(NOW);
      });
    });
    describe('[week]', () => {
      it('past', () => {
        const ret = getTimeDistance('-week', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe('2018-02-25');
        expect(format(ret[1], FORMAT)).toBe('2018-03-03');
      });
      it('feture', () => {
        const ret = getTimeDistance('week', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe('2018-03-04');
        expect(format(ret[1], FORMAT)).toBe('2018-03-10');
      });
    });
    describe('[month]', () => {
      it('past', () => {
        const ret = getTimeDistance('-month', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe('2018-02-01');
        expect(format(ret[1], FORMAT)).toBe('2018-02-28');
      });
      it('feture', () => {
        const ret = getTimeDistance('month', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe('2018-03-01');
        expect(format(ret[1], FORMAT)).toBe('2018-03-31');
      });
    });
    describe('[year]', () => {
      it('past', () => {
        const ret = getTimeDistance('-year', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe('2017-01-01');
        expect(format(ret[1], FORMAT)).toBe('2017-12-31');
      });
      it('feture', () => {
        const ret = getTimeDistance('year', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe('2018-01-01');
        expect(format(ret[1], FORMAT)).toBe('2018-12-31');
      });
    });
    describe('when a number', () => {
      it('past', () => {
        const ret = getTimeDistance(-2, time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe('2018-03-03');
        expect(format(ret[1], FORMAT)).toBe('2018-03-05');
      });
      it('feture', () => {
        const ret = getTimeDistance(2, time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe('2018-03-05');
        expect(format(ret[1], FORMAT)).toBe('2018-03-07');
      });
    });
  });

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
  });

  it('#deepCopy', () => {
    const a = { number: 1 };
    expect(deepCopy({}, a).number).toBe(a.number);
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
