import { DebugElement } from '@angular/core';
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';

import { dispatchFakeEvent } from './dispatch-events';

export const DROPDOWN_MIN_TIME = 1000;

/**
 * 触发 dropdown
 */
export function dispatchDropDown(
  dl: DebugElement,
  trigger: 'mouseleave' | 'click',
  allowNull: boolean = true
): boolean {
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
