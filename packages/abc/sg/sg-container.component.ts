import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input, numberAttribute } from '@angular/core';

import type { REP_TYPE } from '@delon/theme';

@Component({
  selector: 'sg-container, [sg-container]',
  exportAs: 'sgContainer',
  template: ` <ng-content /> `,
  host: {
    '[style.margin-left.px]': 'marginValue()',
    '[style.margin-right.px]': 'marginValue()',
    '[class.ant-row]': 'true',
    '[class.sg__wrap]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SGContainerComponent {
  readonly gutter = input(32, { transform: numberAttribute });
  readonly colInCon = input(null, {
    transform: (v: unknown) => (v == null ? null : (numberAttribute(v) as REP_TYPE)),
    alias: 'sg-container'
  });

  readonly col = input(2, {
    transform: (v: unknown) => (v == null ? null : (numberAttribute(v) as REP_TYPE))
  });

  protected marginValue = computed(() => -(this.gutter() / 2));
}
