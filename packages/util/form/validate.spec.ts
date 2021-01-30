import { FormControl } from '@angular/forms';
import { isDecimal, isIdCard, isInt, isIp4, isMobile, isNum, isUrl } from '@delon/util/format';
import { TEST_DATA } from '../format/validate.spec';
import { _Validators } from './validators';

describe('utils: validate', () => {
  it('#isNum', () => {
    for (const item of TEST_DATA.num) {
      expect(isNum(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);

      const ctr = new FormControl(item.k);
      if (item.v) {
        expect(_Validators.num(ctr)).toBeNull();
      } else {
        expect(_Validators.num(ctr)).toEqual({ num: true });
      }
    }
  });

  it('#isInt', () => {
    for (const item of TEST_DATA.int) {
      expect(isInt(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);

      const ctr = new FormControl(item.k);
      if (item.v) {
        expect(_Validators.int(ctr)).toBeNull();
      } else {
        expect(_Validators.int(ctr)).toEqual({ int: true });
      }
    }
  });

  it('#isDecimal', () => {
    for (const item of TEST_DATA.decimal) {
      expect(isDecimal(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);
      const ctr = new FormControl(item.k);
      if (item.v) {
        expect(_Validators.decimal(ctr)).toBeNull();
      } else {
        expect(_Validators.decimal(ctr)).toEqual({ decimal: true });
      }
    }
  });

  it('#isIdCard', () => {
    for (const item of TEST_DATA.idCard) {
      expect(isIdCard(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);

      const ctr = new FormControl(item.k);
      if (item.v) {
        expect(_Validators.idCard(ctr)).toBeNull();
      } else {
        expect(_Validators.idCard(ctr)).toEqual({ idCard: true });
      }
    }
  });

  it('#isMobile', () => {
    for (const item of TEST_DATA.mobile) {
      expect(isMobile(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);

      const ctr = new FormControl(item.k);
      if (item.v) {
        expect(_Validators.mobile(ctr)).toBeNull();
      } else {
        expect(_Validators.mobile(ctr)).toEqual({ mobile: true });
      }
    }
  });

  it('#isUrl', () => {
    for (const item of TEST_DATA.url) {
      expect(isUrl(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);

      const ctr = new FormControl(item.k);
      if (item.v) {
        expect(_Validators.url(ctr)).toBeNull();
      } else {
        expect(_Validators.url(ctr)).toEqual({ url: true });
      }
    }
  });

  it('#isIp4', () => {
    for (const item of TEST_DATA.ip4) {
      expect(isIp4(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);

      const ctr = new FormControl(item.k);
      if (item.v) {
        expect(_Validators.ip4(ctr)).toBeNull();
      } else {
        expect(_Validators.ip4(ctr)).toEqual({ ip4: true });
      }
    }
  });
});
