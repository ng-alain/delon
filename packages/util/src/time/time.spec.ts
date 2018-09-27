import { getTimeDistance } from './time';
import format from 'date-fns/format';
import addDays from 'date-fns/add_days';

describe('util: time', () => {
  describe('#getTimeDistance', () => {
    let time: Date;
    const FORMAT = 'YYYY-MM-DD';
    const NOW = '2018-03-05';
    const YESTERDAY = '2018-03-04';
    beforeEach(() => {
      time = new Date(2018, 2, 5, 0, 0, 0, 0);
    });
    it('should be now when no-specity', () => {
      const ret = getTimeDistance('-today');
      expect(ret.length).toBe(2);
      const t = new Date;
      expect(format(ret[0], FORMAT)).toBe(format(addDays(t, -1), FORMAT));
      expect(format(ret[1], FORMAT)).toBe(format(t, FORMAT));
    });
    it('should be now when a bad date', () => {
      const ret = getTimeDistance('-today', -NaN);
      expect(ret.length).toBe(2);
      const t = new Date;
      expect(format(ret[0], FORMAT)).toBe(format(addDays(t, -1), FORMAT));
      expect(format(ret[1], FORMAT)).toBe(format(t, FORMAT));
    });
    describe('[today]', () => {
      it('past', () => {
        const ret = getTimeDistance('-today', time);
        expect(ret.length).toBe(2);
        expect(format(ret[0], FORMAT)).toBe(YESTERDAY);
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
});
