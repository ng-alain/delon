import { Component, Input } from '@angular/core';
import { toNumber } from '@delon/util';
import { DelonI18nService } from '@delon/theme';

@Component({
  selector: 'g2-mini-progress',
  template: `
  <nz-tooltip [nzTitle]="i18n.getData('miniProgress').target + target + '%'">
    <div nz-tooltip class="g2-mini-progress__target" [ngStyle]="{'left.%': target}">
      <span class="g2-mini-progress__target-item" [ngStyle]="{'background-color': color}"></span>
      <span class="g2-mini-progress__target-item" [ngStyle]="{'background-color': color}"></span>
    </div>
  </nz-tooltip>
  <div class="g2-mini-progress__wrap">
    <div class="g2-mini-progress__value" [ngStyle]="{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}"></div>
  </div>
  `,
  host: { '[class.g2-mini-progress]': 'true' },
  preserveWhitespaces: false,
})
export class G2ProgressComponent {
  @Input()
  color = '#1890FF';

  @Input()
  get target() {
    return this._target;
  }
  set target(value: any) {
    this._target = Math.min(Math.max(toNumber(value), 0), 100);
  }
  private _target: number;

  @Input()
  get strokeWidth() {
    return this._strokeWidth;
  }
  set strokeWidth(value: any) {
    this._strokeWidth = toNumber(value);
  }
  private _strokeWidth: number;

  @Input()
  get percent() {
    return this._percent;
  }
  set percent(value: any) {
    this._percent = Math.min(Math.max(toNumber(value), 0), 100);
  }
  private _percent: number;

  constructor(public i18n: DelonI18nService) {}
}
