import { Component, HostBinding, Input } from '@angular/core';
import { toBoolean } from '@delon/util';

@Component({
  selector: 'trend',
  template: `
  <ng-content></ng-content>
  <span *ngIf="flag" class="{{flag}}"><i class="anticon anticon-caret-{{flag}}"></i></span>
  `,
  host: {
    '[class.ad-trend]': 'true',
    '[class.grey]': '!colorful',
  },
  preserveWhitespaces: false,
})
export class TrendComponent {
  /** 上升下降标识 */
  @Input() flag: 'up' | 'down';

  /** 是否彩色标记 */
  @Input()
  get colorful() {
    return this._colorful;
  }
  set colorful(value: any) {
    this._colorful = toBoolean(value);
  }
  private _colorful = true;
}
