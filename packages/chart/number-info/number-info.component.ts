import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
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
    '[class.number-info__light]': `theme === 'light'`,
    '[class.number-info__default]': `theme === 'default'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzStringTemplateOutletDirective, NzIconDirective]
})
export class NumberInfoComponent {
  /** 标题 */
  @Input() title?: string | TemplateRef<void> | null;
  /** 子标题 */
  @Input() subTitle?: string | TemplateRef<void> | null;
  /** 总量 */
  @Input() total?: string | number | TemplateRef<void> | null;
  /** 总量后缀 */
  @Input() subTotal?: string | number | TemplateRef<void> | null;
  /** 子总量 */
  @Input() suffix?: string | null;
  /** 增加状态 */
  @Input() status?: 'up' | 'down';
  /** 状态样式 */
  @Input() theme: 'light' | 'default' = 'light';
  /** 设置数字和描述直接的间距（像素） */
  @Input({ transform: numberAttribute }) gap = 8;
}
