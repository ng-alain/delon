import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { getTimeDistance, toDate } from './time';

const NOW = new Date(2000, 0, 1, 0, 0, 0, 0);

describe('util: time', () => {
  describe('#getTimeDistance', () => {
    describe('should be specify time', () => {
      it('when is string', () => {
        const ret = getTimeDistance('today', '2000-01-01 00:00:00');
        expect(ret.length).toBe(2);
        expect(f(ret[0])).toBe(`2000-01-01 00:00:00`);
        expect(f(ret[1])).toBe(`2000-01-01 23:59:59`);
      });
      it('when is number', () => {
        const ret = getTimeDistance('today', NOW.getTime());
        expect(ret.length).toBe(2);
        expect(f(ret[0])).toBe(`2000-01-01 00:00:00`);
        expect(f(ret[1])).toBe(`2000-01-01 23:59:59`);
      });
    });
    [
      { type: '-today', ret1: `1999-12-31 00:00:00`, ret2: `2000-01-01 23:59:59` },
      { type: 'yesterday', ret1: `1999-12-31 00:00:00`, ret2: `1999-12-31 23:59:59` },
      { type: 'week', ret1: `1999-12-27 00:00:00`, ret2: `2000-01-02 23:59:59` },
      { type: '-week', ret1: `1999-12-20 00:00:00`, ret2: `1999-12-26 23:59:59` },
      { type: 'month', ret1: `2000-01-01 00:00:00`, ret2: `2000-01-31 23:59:59` },
      { type: '-month', ret1: `1999-12-01 00:00:00`, ret2: `1999-12-31 23:59:59` },
      { type: 'year', ret1: `2000-01-01 00:00:00`, ret2: `2000-12-31 23:59:59` },
      { type: '-year', ret1: `1999-01-01 00:00:00`, ret2: `1999-12-31 23:59:59` }
    ].forEach(item => {
      it(`with ${item.type}`, () => {
        const ret = getTimeDistance(item.type as NzSafeAny, +NOW);
        expect(ret.length).toBe(2);
        expect(f(ret[0])).toBe(item.ret1);
        expect(f(ret[1])).toBe(item.ret2);
      });
    });

    describe('width days number', () => {
      it('when positive number', () => {
        const ret = getTimeDistance(1, +NOW);
        expect(ret.length).toBe(2);
        expect(f(ret[0])).toBe(`2000-01-01 00:00:00`);
        expect(f(ret[1])).toBe(`2000-01-02 23:59:59`);
      });
      it('when negative number', () => {
        const ret = getTimeDistance(-1, +NOW);
        expect(ret.length).toBe(2);
        expect(f(ret[0])).toBe(`1999-12-31 00:00:00`);
        expect(f(ret[1])).toBe(`2000-01-01 23:59:59`);
      });
    });

    it('shoule be ignore max time', () => {
      const ret = getTimeDistance(1, +NOW, { ignoreMaxTime: true });
      expect(ret.length).toBe(2);
      expect(f(ret[0])).toBe(`2000-01-01 00:00:00`);
      expect(f(ret[1])).toBe(`2000-01-02 00:00:00`);
    });
  });

  it('#toDate', () => {
    expect(toDate(null).toString()).toBe(`Invalid Date`);
    expect(f(toDate(NOW))).toBe(`2000-01-01 00:00:00`);
    expect(f(toDate(+NOW))).toBe(`2000-01-01 00:00:00`);
    expect(f(toDate(Math.trunc(+NOW / 1000), { timestampSecond: true }))).toBe(`2000-01-01 00:00:00`);
    expect(f(toDate(`${+NOW}`))).toBe(`2000-01-01 00:00:00`);
    expect(f(toDate(f(NOW)))).toBe(`2000-01-01 00:00:00`);
    expect(isNaN(toDate(new String('') as NzSafeAny) as NzSafeAny)).toBe(true);
  });

  function f(d: Date, formatString = `yyyy-MM-dd HH:mm:ss`): string {
    return format(d, formatString, { locale: zhCN });
  }
});
