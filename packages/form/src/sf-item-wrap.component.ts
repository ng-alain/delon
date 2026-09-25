import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, effect, inject, input } from '@angular/core';

import { withAnimationCheck } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { NzFormModule, type NzFormControlStatusType } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import type { SFSchema } from './schema/index';
import type { SFOptionalHelp, SFUISchemaItem } from './schema/ui';

@Component({
  selector: 'sf-item-wrap',
  templateUrl: './sf-item-wrap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzFormModule, NzGridModule, NzIconModule, NzTooltipModule]
})
export class SFItemWrapComponent {
  private readonly statusSrv = inject(NzFormStatusService);

  // signal 输入；父模板（含第三方自定义 widget）用 `[schema]="schema"` 这样的写法即可绑定
  readonly id = input<string>();
  readonly schema = input.required<SFSchema>();
  readonly ui = input.required<SFUISchemaItem>();
  readonly showError = input<boolean>();
  readonly error = input<string>();
  readonly showTitle = input<boolean | string | null>();
  readonly title = input<string | null>(null);

  /** @internal 模板用 */
  protected readonly _showTitle = computed(() => !!this.showTitle());

  protected readonly t = computed(() => {
    const title = this.title();
    return title === null ? (this.schema().title as string) : title;
  });

  protected readonly oh = computed(() => this.ui().optionalHelp as SFOptionalHelp);

  protected readonly nzValidateAnimationEnter = withAnimationCheck(() => 'ant-form-validate_animation-enter');
  protected readonly nzValidateAnimationLeave = withAnimationCheck(() => 'ant-form-validate_animation-leave');

  constructor() {
    // 「错误状态 → 通知 NzFormStatusService」的响应式副作用。
    //
    // effect 每次 CD 都会重跑，因此这里必须是幂等推导，并且要与另一处写入源
    // `FormProperty.updateFeedback()`（推 `{status: feedback, hasFeedback: !!feedback}`）
    // 的语义一致，否则会把它的状态覆盖掉。
    //
    // 推导规则（对两个来源等价）：
    // - `ui.feedback` 有值 → 以它为准，hasFeedback = true
    // - 否则回落到校验错误 → status = 'error'，hasFeedback 仍取决于 feedback
    effect(() => {
      const feedback = (this.ui().feedback ?? '') as NzFormControlStatusType;
      const hasError = !!this.error();
      this.statusSrv.formStatusChanges.next({
        status: feedback || (hasError ? 'error' : ''),
        hasFeedback: !!feedback
      });
    });
  }
}
