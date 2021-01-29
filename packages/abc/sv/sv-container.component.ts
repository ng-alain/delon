import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber, NumberInput } from '@delon/util/decorator';

@Component({
  selector: 'sv-container, [sv-container]',
  exportAs: 'svContainer',
  templateUrl: './sv-container.component.html',
  host: {
    '[class.sv__container]': 'true',
    '[class.sv__horizontal]': `layout === 'horizontal'`,
    '[class.sv__vertical]': `layout === 'vertical'`,
    '[class.sv__small]': `size === 'small'`,
    '[class.sv__large]': `size === 'large'`,
    '[class.clearfix]': `true`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SVContainerComponent {
  static ngAcceptInputType_gutter: NumberInput;
  static ngAcceptInputType_labelWidth: NumberInput;
  static ngAcceptInputType_col: NumberInput;

  @Input() title: string | TemplateRef<void>;
  @Input() size: 'small' | 'large';
  /** 列表项间距，单位为 `px` */
  @Input() @InputNumber() gutter: number;
  @Input() layout: 'horizontal' | 'vertical';
  @Input() @InputNumber() labelWidth: number;
  /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
  @Input() @InputNumber() col: number;
  @Input() default: boolean;

  constructor(configSrv: AlainConfigService) {
    configSrv.attach(this, 'sv', {
      size: 'large',
      gutter: 32,
      layout: 'horizontal',
      col: 3,
      default: true,
    });
  }
}
