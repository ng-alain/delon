import { commasNumber, megaNumber } from './number';

describe('util: number', () => {
  describe('#commasNumber', () => {
    it('should be working', () => {
      expect(commasNumber(10000)).toBe('10,000');
    });
    it('should be thousands separators', () => {
      expect(commasNumber(10000, '-')).toBe('10-000');
    });
  });

  describe('#megaNumber', () => {
    const data: Array<{ value: number | string; return: string; returnType?: 'default' | 'i18n' }> = [
      { value: 10000, return: '10K' },
      { value: 12456, return: '12.46K' },
      { value: '999000', return: '1M' },
      { value: -999, return: '-1K' },
      { value: 0, return: '0' },
      { value: 10000, return: '10千', returnType: 'i18n' },
    ];
    data.forEach(i => {
      it(`should be ${i.value} return ${i.return}${i.returnType === 'i18n' ? ' via i18n' : ''}`, () => {
        const res = megaNumber(i.value);
        expect(res.value + (i.returnType === 'i18n' ? res.unitI18n : res.unit)).toBe(i.return);
      });
    });

    it('should be precision', () => {
      expect(megaNumber(10100, 1).value).toBe('10.1');
    });

    it('should be powerI18n', () => {
      expect(megaNumber(10100, 1, { K: 'Qiang' } as any).unitI18n).toBe('Qiang');
    });
  });
});
