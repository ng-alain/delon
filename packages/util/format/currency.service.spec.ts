import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CurrencyService } from './currency.service';

describe('util: FormatCurrencyService', () => {
  let srv: CurrencyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'CNY' }],
    });
    srv = TestBed.inject<CurrencyService>(CurrencyService);
  });

  describe('#format', () => {
    it('should be working', () => {
      expect(srv.format(10000)).toBe('10,000');
      expect(srv.format(10000.567, { precision: 2 })).toBe('10,000.57');
    });
    it('should be / 100 when staring unit is cent', () => {
      expect(srv.format(100, { startingUnit: 'cent' })).toBe('1');
    });
    it('should be return empty when is NaN', () => {
      expect(srv.format(undefined!)).toBe('');
    });
    it('#ingoreZeroPrecision', () => {
      expect(srv.format(100, { startingUnit: 'cent', ingoreZeroPrecision: false })).toBe('1.00');
    });
    describe('[USE ANGULAR]', () => {
      it('should be working', () => {
        expect(srv.format(10000, { ngCurrency: { display: 'symbol' } })).toBe('CN¥10,000.00');
        expect(
          srv.format(5.1234, { startingUnit: 'yuan', ngCurrency: { currencyCode: 'USD', display: 'code', digitsInfo: '.0-3' } }),
        ).toEqual('USD5.123');
        expect(srv.format(5.1234, { startingUnit: 'yuan', ngCurrency: { currencyCode: 'CAD', display: 'symbol-narrow' } })).toEqual(
          '$5.12',
        );
      });
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

    it('should be / 100 when staring unit is cent', () => {
      expect(srv.mega(100, { startingUnit: 'cent' }).value).toBe('1');
    });
  });

  describe('#cny', () => {
    [
      { inWords: false, num: 0.123456789, value: '零点一二三四五六七八九' },
      { inWords: true, num: 0.123456789, value: '零元壹角贰分叁厘肆毫' },
      { inWords: false, num: 20000000000000000, value: '两兆' },
      { inWords: true, num: 20000000000000000, value: '贰兆元整' },
      { inWords: false, num: 0, value: '零' },
      { inWords: true, num: 0, value: '零元整' },
      { inWords: false, num: '1.0', value: '一' },
      { inWords: true, num: '1.0', value: '壹元整' },
      { inWords: false, num: '1.0001', value: '一点零零零一' },
      { inWords: true, num: '1.0001', value: '壹元零角零分零厘壹毫' },
      { inWords: false, num: 10.34, value: '十点三四' },
      { inWords: false, num: 1.34, value: '一点三四' },
      { inWords: true, num: 1.34, value: '壹元叁角肆分' },
      { inWords: false, num: 1000.34, value: '一千点三四' },
      { inWords: true, num: 1000.34, value: '壹仟元叁角肆分' },
      { inWords: false, num: -1202030, value: '负一百二十万零两千零三十' },
      { inWords: true, num: -1202030, value: '负壹佰贰拾万零贰仟零叁拾元整' },
      {
        inWords: false,
        num: -1202030,
        value: '欠一百二十万零两千零三十',
        options: { minusSymbol: '欠' },
      },
      {
        inWords: true,
        num: -1202030,
        value: '欠壹佰贰拾万零贰仟零叁拾元整',
        options: { minusSymbol: '欠' },
      },
      {
        inWords: false,
        num: 100,
        value: '一',
        options: { startingUnit: 'cent' },
      },
    ].forEach((item: any) => {
      it(`${typeof item.num === 'string' ? '[string]' : ''}${item.inWords ? 'RMB:' : ''}${item.num} muse be ${item.value}`, () => {
        expect(srv.cny(item.num, { inWords: item.inWords, ...item.options })).toBe(item.value);
      });
    });

    it('should be simple', () => {
      expect(srv.cny('1')).toBe('壹元整');
    });
  });
});
