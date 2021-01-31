import { TestBed } from '@angular/core/testing';
import { FormatCurrencyService } from './currency.service';

describe('util: FormatCurrencyService', () => {
  let srv: FormatCurrencyService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    srv = TestBed.inject<FormatCurrencyService>(FormatCurrencyService);
  });

  describe('#commas', () => {
    it('should be working', () => {
      expect(srv.commas(10000)).toBe('10,000');
    });
    it('should be thousands separators', () => {
      expect(srv.commas(10000, { separator: '-' })).toBe('10-000');
    });
  });

  describe('#mega', () => {
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
        const res = srv.mega(i.value);
        expect(res.value + (i.returnType === 'i18n' ? res.unitI18n : res.unit)).toBe(i.return);
      });
    });

    it('should be precision', () => {
      expect(srv.mega(10100, { precision: 1 }).value).toBe('10.1');
    });

    it('should be powerI18n', () => {
      expect(srv.mega(10100, { precision: 1, unitI18n: { K: 'Qiang' } as any }).unitI18n).toBe('Qiang');
    });
  });
});
