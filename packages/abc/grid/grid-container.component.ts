import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import { InputNumber } from '@delon/util';
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
  exportAs: 'sgContainer',
})
export class SGContainerComponent {
  //#region fields

  @Input() @InputNumber() gutter: number;
  @Input('sg-container') @InputNumber(null) colInCon: REP_TYPE;
  @Input() @InputNumber(null) col: REP_TYPE;

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
    Object.assign(this, { ...new SGConfig(), ...cog});
  }
}
