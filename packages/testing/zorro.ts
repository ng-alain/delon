import { DebugElement } from '@angular/core';
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NzDropDownDirective } from 'ng-zorro-antd';

// https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L159
export const DROPDOWN_MIN_TIME = 51;

export function dispatchDropDown(dl: DebugElement, trigger: 'mouseleave' | 'click', allowNull = true) {
  const directive = dl.query(By.directive(NzDropDownDirective));
  if (allowNull && directive == null) {
    return false;
  }
  if (trigger === 'click') {
    directive.injector.get(NzDropDownDirective).onClick(null);
  } else {
    directive.injector.get(NzDropDownDirective).onMouseEnter(null);
  }
  tick(DROPDOWN_MIN_TIME);
  return true;
}
