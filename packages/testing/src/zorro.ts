import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NzDropdownDirective } from 'ng-zorro-antd/dropdown';

import { dispatchFakeEvent } from './dispatch-events';

export const DROPDOWN_MIN_TIME = 1000;

/**
 * 触发 dropdown；不推进时间，调用方需自行推进其假定时器
 */
export function dispatchDropDown(
  dl: DebugElement,
  trigger: 'mouseleave' | 'click',
  allowNull: boolean = true
): boolean {
  const directive = dl.query(By.directive(NzDropdownDirective));
  if (allowNull && directive == null) {
    return false;
  }
  const el = directive.injector.get(NzDropdownDirective).elementRef.nativeElement as HTMLElement;
  if (trigger === 'click') {
    dispatchFakeEvent(el, 'click');
  } else {
    dispatchFakeEvent(el, 'mouseenter');
  }
  return true;
}
