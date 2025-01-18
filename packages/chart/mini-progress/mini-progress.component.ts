import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  ViewEncapsulation,
  inject,
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
      [nzTooltipTitle]="targetSuffix + target + '%'"
      class="g2-mini-progress__target"
      [style]="{ left: target + '%' }"
    >
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color }"></span>
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color }"></span>
    </div>
    <div class="g2-mini-progress__wrap">
      <div
        class="g2-mini-progress__value"
        [style]="{ 'background-color': color, width: percent + '%', height: strokeWidth + 'px' }"
      ></div>
    </div>
  `,
  host: { '[class.g2-mini-progress]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzTooltipDirective]
})
export class G2MiniProgressComponent implements OnChanges {
  readonly targetSuffix = inject(DelonLocaleService).getData('miniProgress').target;
  private readonly cdr = inject(ChangeDetectorRef);

  @Input() color = '#1890FF';
  @Input({ transform: numberAttribute }) target?: number | null;
  @Input({ transform: numberAttribute }) percent?: number | null;
  @Input({ transform: numberAttribute }) strokeWidth?: number | null;

  private fixNum(value: number | undefined | null): number {
    return Math.min(Math.max(numberAttribute(value), 0), 100);
  }

  ngOnChanges(): void {
    this.target = this.fixNum(this.target);
    this.percent = this.fixNum(this.percent);
    this.cdr.detectChanges();
  }
}
