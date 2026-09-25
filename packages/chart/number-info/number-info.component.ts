import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  input,
  numberAttribute
} from '@angular/core';

import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'number-info',
  exportAs: 'numberInfo',
  templateUrl: './number-info.component.html',
  host: {
    '[class.number-info]': `true`,
    '[class.number-info__light]': `theme() === 'light'`,
    '[class.number-info__default]': `theme() === 'default'`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective, NzIconDirective]
})
export class NumberInfoComponent {
  /** 标题 */
  readonly title = input<string | TemplateRef<void> | null>();
  /** 子标题 */
  readonly subTitle = input<string | TemplateRef<void> | null>();
  /** 总量 */
  readonly total = input<string | number | TemplateRef<void> | null>();
  /** 子总量 */
  readonly subTotal = input<string | number | TemplateRef<void> | null>();
  /** 总量后缀 */
  readonly suffix = input<string | null>();
  /** 增加状态 */
  readonly status = input<'up' | 'down'>();
  /** 状态样式 */
  readonly theme = input<'light' | 'default'>('light');
  /** 设置数字和描述直接的间距（像素） */
  readonly gap = input(8, { transform: numberAttribute });
}
