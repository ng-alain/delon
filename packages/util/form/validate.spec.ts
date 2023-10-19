import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { _Validators } from './validators';
import { TEST_DATA } from '../format/validate.spec';

describe('utils: form-validate', () => {
  function process(methodName: keyof typeof _Validators, data: Array<{ k: string; v: boolean }>): void {
    for (const item of data) {
      const ctr = new FormControl(item.k);
      const fn = _Validators[methodName] as (control: AbstractControl) => ValidationErrors | null;
      const res = fn(ctr);
      if (item.v) {
        expect(res).toBeNull();
      } else {
        expect(res).not.toBeNull();
        expect((res as NzSafeAny)[methodName]).toEqual(true);
      }
    }
  }

  it('#num', () => process('num', TEST_DATA.num as NzSafeAny[]));
  it('#int', () => process('int', TEST_DATA.int as NzSafeAny[]));
  it('#decimal', () => process('decimal', TEST_DATA.decimal as NzSafeAny[]));
  it('#idCard', () => process('idCard', TEST_DATA.idCard as NzSafeAny[]));
  it('#mobile', () => process('mobile', TEST_DATA.mobile as NzSafeAny[]));
  it('#url', () => process('url', TEST_DATA.url as NzSafeAny[]));
  it('#ip', () => process('ip', TEST_DATA.ip as NzSafeAny[]));
  it('#color', () => process('color', TEST_DATA.color as NzSafeAny[]));
  it('#chinese', () => process('chinese', TEST_DATA.chinese as NzSafeAny[]));
});
