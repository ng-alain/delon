import { Injectable } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Injectable({ providedIn: 'root' })
export class STWidgetRegistry {
  private _widgets: { [type: string]: NzSafeAny } = {};

  get widgets(): NzSafeAny {
    return this._widgets;
  }

  register(type: string, widget: NzSafeAny): void {
    this._widgets[type] = widget;
  }

  has(type: string): boolean {
    return this._widgets.hasOwnProperty(type);
  }

  get(type: string): NzSafeAny {
    return this._widgets[type];
  }
}
