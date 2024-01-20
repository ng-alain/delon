import { NgStyle } from '@angular/common';
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
  templateUrl: './mini-progress.component.html',
  host: { '[class.g2-mini-progress]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzTooltipDirective, NgStyle]
})
export class G2MiniProgressComponent implements OnChanges {
  readonly i18n = inject(DelonLocaleService);
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
