import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService, AlainSGConfig } from '@delon/config';
import { REP_TYPE } from '@delon/theme';
import { InputNumber } from '@delon/util';

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
  // #region fields

  @Input() @InputNumber() gutter: number;
  @Input('sg-container') @InputNumber(null) colInCon: REP_TYPE;
  @Input() @InputNumber(null) col: REP_TYPE;

  // #endregion

  get marginValue(): number {
    return -(this.gutter / 2);
  }

  constructor(configSrv: AlainConfigService) {
    configSrv.attach<AlainSGConfig, 'sg'>(this, 'sg', {
      gutter: 32,
      col: 2,
    });
  }
}
