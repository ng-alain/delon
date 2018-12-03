import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { toNumber, InputNumber } from '@delon/util';
import { SGConfig } from './grid.config';

@Component({
  selector: 'sg-container, [sg-container]',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class.ant-row]': 'true',
    '[class.sg__wrap]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SGContainerComponent {
  //#region fields

  @Input()
  @InputNumber()
  gutter: number;

  @Input('sg-container')
  set col(value: any) {
    const a = toNumber(value, 0);
    if (a <= 0) return;
    this._col = toNumber(value, 0);
  }
  get col() {
    return this._col;
  }
  private _col: number;

  //#endregion

  @HostBinding('style.margin-left.px')
  get marginLeft(): number {
    return -(this.gutter / 2);
  }

  @HostBinding('style.margin-right.px')
  get marginRight(): number {
    return -(this.gutter / 2);
  }

  constructor(cog: SGConfig) {
    Object.assign(this, cog);
  }
}
