import { Component, Input } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { toNumber, InputNumber } from '@delon/util';

@Component({
  selector: 'g2-mini-progress',
  templateUrl: './mini-progress.component.html',
  host: { '[class.g2-mini-progress]': 'true' },
})
export class G2ProgressComponent {
  @Input()
  color = '#1890FF';

  @Input()
  get target() {
    return this._target;
  }
  // tslint:disable-next-line:no-any
  set target(value: any) {
    this._target = Math.min(Math.max(toNumber(value), 0), 100);
  }
  private _target: number;

  @Input() @InputNumber() strokeWidth: number;

  @Input()
  get percent() {
    return this._percent;
  }
  // tslint:disable-next-line:no-any
  set percent(value: any) {
    this._percent = Math.min(Math.max(toNumber(value), 0), 100);
  }
  private _percent: number;

  constructor(public i18n: DelonLocaleService) { }
}
