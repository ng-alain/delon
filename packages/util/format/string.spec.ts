import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { format, formatMask, FormatMaskOption } from './string';

describe('util: string', () => {
  describe('#format', () => {
    [
      { s: 'this is ${name}', o: { name: 'asdf' }, r: 'this is asdf' },
      {
        s: 'this is ${name}, age: ${age}',
        o: { name: 'asdf', age: 10 },
        r: 'this is asdf, age: 10'
      }
    ].forEach(item => {
      it(item.s, () => {
        expect(format(item.s, item.o)).toBe(item.r);
      });
    });
    it('should allow null string', () => {
      expect(format(null, {})).toBe('');
    });
    it('should be support non-exists obj value', () => {
      expect(format('this is ${name}', {})).toBe('this is ');
    });
    it('should be support invalid object (eg: null, undefined)', () => {
      expect(format('this is ${name}', null)).toBe('this is ');
      expect(format('this is ${name}', undefined)).toBe('this is ');
    });
    it('should be deep get value', () => {
      expect(format('this is ${user.name}', { user: { name: 'asdf' } }, true)).toBe('this is asdf');
    });
  });

  describe('#formatMask', () => {
    const data: Array<{ value: string; mask: string | FormatMaskOption; result: string }> = [
      { value: '123', mask: '(###)', result: '(123)' },
      { value: '15900000000', mask: '+86 ###########', result: '+86 15900000000' },
      { value: '123', mask: '#-#-#', result: '1-2-3' },
      { value: '15900000000', mask: '999****9999', result: '159****0000' },
      { value: 'aBc', mask: 'UUU', result: 'ABC' },
      { value: 'ABc', mask: 'LLL', result: 'abc' },
      { value: '15900000000', mask: '+86 999-9999-9999', result: '+86 159-0000-0000' },
      { value: '1', mask: '900', result: '100' }
    ];
    for (const item of data) {
      it(`should be return ${item.result} when value is '${item.value}' and mask is '${item.mask}'`, () => {
        expect(formatMask(item.value, item.mask)).toBe(item.result);
      });
    }

    it('should be custom token', () => {
      expect(
        formatMask('你好123', {
          mask: 'CC999',
          tokens: { C: { pattern: /.*/, transform: char => (char === '你' ? 'N' : 'H') } }
        })
      ).toBe('NH123');
    });

    it('should be return empty when is invalid string', () => {
      expect(formatMask(null as NzSafeAny, '#')).toBe('');
    });
  });
});
