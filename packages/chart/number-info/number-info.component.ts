import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputNumber, NumberInput } from '@delon/util';

@Component({
  selector: 'number-info',
  exportAs: 'numberInfo',
  templateUrl: './number-info.component.html',
  host: {
    '[class.number-info]': `true`,
    '[class.number-info__light]': `theme === 'light'`,
    '[class.number-info__default]': `theme === 'default'`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NumberInfoComponent {
  static ngAcceptInputType_gap: NumberInput;

  /** 标题 */
  @Input() title: string | TemplateRef<void>;
  /** 子标题 */
  @Input() subTitle: string | TemplateRef<void>;
  /** 总量 */
  @Input() total: string | TemplateRef<void>;
  /** 总量后缀 */
  @Input() subTotal: string | TemplateRef<void>;
  /** 子总量 */
  @Input() suffix: string;
  /** 增加状态 */
  @Input() status: 'up' | 'down';
  /** 状态样式 */
  @Input() theme: 'light' | 'default' = 'light';
  /** 设置数字和描述直接的间距（像素） */
  @Input() @InputNumber() gap = 8;
}
