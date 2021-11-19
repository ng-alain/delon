import { Component, Input } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'setting-drawer-item',
  templateUrl: './setting-drawer-item.component.html',
  host: {
    '[class.setting-drawer__body-item]': 'true'
  }
})
export class SettingDrawerItemComponent {
  i: NzSafeAny = {};

  @Input()
  set data(val: NzSafeAny) {
    this.i = val;
    if (val.type === 'px') {
      this.pxVal = +val.value.replace('px', '');
    }
  }

  pxVal = 0;

  pxChange(val: number): void {
    this.i.value = `${val}px`;
  }

  format = (value: number): string => `${value} px`;
}
