import { DebugElement } from '@angular/core';
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { dispatchFakeEvent } from './dispatch-events';

/**
 * [nz-dropdown](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L88) 抖动合理值
 */
export const DROPDOWN_MIN_TIME = 51;

/**
 * 触发 dropdown
 */
export function dispatchDropDown(dl: DebugElement, trigger: 'mouseleave' | 'click', allowNull = true) {
  const directive = dl.query(By.directive(NzDropDownDirective));
  if (allowNull && directive == null) {
    return false;
  }
  const el = directive.injector.get<NzDropDownDirective>(NzDropDownDirective).elementRef.nativeElement as HTMLElement;
  if (trigger === 'click') {
    dispatchFakeEvent(el, 'click');
  } else {
    dispatchFakeEvent(el, 'mouseenter');
  }
  tick(DROPDOWN_MIN_TIME);
  return true;
}
