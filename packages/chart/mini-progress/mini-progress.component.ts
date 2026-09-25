import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  numberAttribute
} from '@angular/core';

import { DelonLocaleService } from '@delon/theme';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'g2-mini-progress',
  exportAs: 'g2MiniProgress',
  template: `
    <div
      nz-tooltip
      [nzTooltipTitle]="locale().targetSuffix + _target() + '%'"
      class="g2-mini-progress__target"
      [style]="{ left: _target() + '%' }"
    >
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color() }"></span>
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color() }"></span>
    </div>
    <div class="g2-mini-progress__wrap">
      <div
        class="g2-mini-progress__value"
        [style]="{ 'background-color': color(), width: _percent() + '%', height: strokeWidth() + 'px' }"
      ></div>
    </div>
  `,
  host: { '[class.g2-mini-progress]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzTooltipDirective]
})
export class G2MiniProgressComponent {
  locale = inject(DelonLocaleService).valueSignal('miniProgress');

  readonly color = input('#1890FF');
  readonly target = input<number | null>(null, { transform: numberAttribute });
  readonly percent = input<number | null>(null, { transform: numberAttribute });
  readonly strokeWidth = input<number | null>(null, { transform: numberAttribute });

  /** 钳位只作用于显示值，输入本身保持原值 */
  protected readonly _target = computed(() => this.fixNum(this.target()));
  protected readonly _percent = computed(() => this.fixNum(this.percent()));

  private fixNum(value: number | undefined | null): number {
    return Math.min(Math.max(numberAttribute(value), 0), 100);
  }
}
