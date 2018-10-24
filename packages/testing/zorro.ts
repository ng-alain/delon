import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { tick } from '@angular/core/testing';

import { NzDropDownDirective } from 'ng-zorro-antd';

// https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L196
export const DROPDOWN_MIN_TIME = 51;

export function dispatchDropDown(dl: DebugElement, trigger: 'mouseleave' | 'click', allowNull = true) {
  const directive = dl.query(By.directive(NzDropDownDirective));
  if (allowNull && directive == null) {
    return false;
  }
  const srv = directive.injector.get(NzDropDownDirective);
  const mokeMouse = new MouseEvent(trigger);
  if (trigger === 'click') {
    srv.onClick(mokeMouse);
  } else {
    srv.onMouseEnter(mokeMouse);
  }
  tick(DROPDOWN_MIN_TIME);
  return true;
}
