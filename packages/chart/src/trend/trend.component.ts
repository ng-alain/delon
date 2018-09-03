import { Component, Input } from '@angular/core';
import { toBoolean } from '@delon/util';

@Component({
  selector: 'trend',
  template: `
  <ng-content></ng-content>
  <span *ngIf="flag" class="trend__{{flag}}"><i class="anticon anticon-caret-{{flag}}"></i></span>
  `,
  host: {
    '[class.trend]': 'true',
    '[class.trend__grey]': '!colorful',
    '[class.trend__reverse]': 'colorful && reverseColor',
  },
  preserveWhitespaces: false,
})
export class NaTrendComponent {
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

  /** 颜色反转 */
  @Input()
  get reverseColor() {
    return this._reverseColor;
  }
  set reverseColor(value: any) {
    this._reverseColor = toBoolean(value);
  }
  private _reverseColor = false;
}
