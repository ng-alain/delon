import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber, NumberInput } from '@delon/util/decorator';

@Component({
  selector: 'sg-container, [sg-container]',
  exportAs: 'sgContainer',
  template: ` <ng-content></ng-content> `,
  host: {
    '[style.margin-left.px]': 'marginValue',
    '[style.margin-right.px]': 'marginValue',
    '[class.ant-row]': 'true',
    '[class.sg__wrap]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SGContainerComponent {
  static ngAcceptInputType_gutter: NumberInput;
  static ngAcceptInputType_colInCon: NumberInput;
  static ngAcceptInputType_col: NumberInput;

  @Input() @InputNumber() gutter: number;
  @Input('sg-container') @InputNumber(null) colInCon: REP_TYPE;
  @Input() @InputNumber(null) col: REP_TYPE;

  get marginValue(): number {
    return -(this.gutter / 2);
  }

  constructor(configSrv: AlainConfigService) {
    configSrv.attach(this, 'sg', {
      gutter: 32,
      col: 2,
    });
  }
}
