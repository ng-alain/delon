import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  numberAttribute
} from '@angular/core';

import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';

@Component({
  selector: 'sv-title, [sv-title]',
  exportAs: 'svTitle',
  template: '<ng-content />',
  host: {
    class: 'sv__title',
    '[style.padding-left.px]': 'paddingValue()',
    '[style.padding-right.px]': 'paddingValue()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SVTitleComponent {
  private readonly parentComp = inject(SVContainerComponent, { host: true, optional: true });
  protected paddingValue = computed(() => this.parentComp!.gutter() / 2);

  constructor() {
    if (this.parentComp == null) {
      throw new Error(`[sv-title] must include 'sv-container' component`);
    }
  }
}

@Component({
  selector: 'sv-container, [sv-container]',
  exportAs: 'svContainer',
  template: `
    <div class="ant-row" [style]="margin()">
      @let tit = title();
      @if (tit) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="tit">{{ tit }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `,
  host: {
    class: 'sv__container',
    '[class.sv__horizontal]': `layout() === 'horizontal'`,
    '[class.sv__vertical]': `layout() === 'vertical'`,
    '[class.sv__small]': `size() === 'small'`,
    '[class.sv__large]': `size() === 'large'`,
    '[class.sv__bordered]': `bordered()`,
    '[class.clearfix]': `true`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [SVTitleComponent, NzStringTemplateOutletDirective]
})
export class SVContainerComponent {
  private readonly cogSrv = inject(AlainConfigService);
  readonly colInCon = input(null, {
    transform: (v: unknown) => (v == null ? null : (numberAttribute(v) as REP_TYPE)),
    alias: 'sv-container'
  });
  readonly title = input<string | TemplateRef<void>>();
  readonly size = input<'small' | 'large' | 'default'>('large');
  /** 列表项间距，单位为 `px` */
  readonly gutter = input(32, { transform: numberAttribute });
  readonly layout = input<'horizontal' | 'vertical'>('horizontal');
  readonly labelWidth = input(undefined, { transform: numberAttribute });
  /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
  readonly col = input(3, { transform: numberAttribute });
  readonly default = input(true, { transform: booleanAttribute });
  readonly noColon = input(false, { transform: booleanAttribute });
  readonly bordered = input(false, { transform: booleanAttribute });

  protected margin = computed(() => {
    return this.bordered()
      ? {}
      : { 'margin-left': `${-(this.gutter() / 2)}px`, 'margin-right': `${-(this.gutter() / 2)}px` };
  });

  constructor() {
    this.cogSrv.attach(this, 'sv', {
      size: 'large',
      gutter: 32,
      layout: 'horizontal',
      col: 3,
      default: true
    });
  }
}
