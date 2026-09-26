import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import * as v from './validate';
import { TEST_DATA } from './validate.fixture';

describe('utils: format-validate', () => {
  function process(methodName: keyof typeof v, data: Array<{ k: string; v: boolean }>): void {
    for (const item of data) {
      expect((v[methodName] as NzSafeAny)(item.k), `[${methodName}] ${item.k} must be ${item.v}`).toBe(item.v);
    }
  }

  it('#isNum', () => process('isNum', TEST_DATA.num as NzSafeAny));
  it('#isInt', () => process('isInt', TEST_DATA.int as NzSafeAny));
  it('#isDecimal', () => process('isDecimal', TEST_DATA.decimal as NzSafeAny));
  it('#isIdCard', () => process('isIdCard', TEST_DATA.idCard as NzSafeAny));
  it('#isMobile', () => process('isMobile', TEST_DATA.mobile as NzSafeAny));
  it('#isUrl', () => process('isUrl', TEST_DATA.url as NzSafeAny));
  it('#isIp', () => process('isIp', TEST_DATA.ip as NzSafeAny));
  it('#isColor', () => process('isColor', TEST_DATA.color as NzSafeAny));
  it('#isChinese', () => process('isChinese', TEST_DATA.chinese as NzSafeAny));
});
