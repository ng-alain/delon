import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputNumber, NumberInput, toNumber } from '@delon/util/other';

@Component({
  selector: 'g2-mini-progress',
  exportAs: 'g2MiniProgress',
  templateUrl: './mini-progress.component.html',
  host: { '[class.g2-mini-progress]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2MiniProgressComponent implements OnChanges {
  static ngAcceptInputType_target: NumberInput;
  static ngAcceptInputType_percent: NumberInput;
  static ngAcceptInputType_strokeWidth: NumberInput;

  @Input() color = '#1890FF';
  @Input() @InputNumber() target: number;
  @Input() @InputNumber() percent: number;
  @Input() @InputNumber() strokeWidth: number;

  constructor(public i18n: DelonLocaleService, private cdr: ChangeDetectorRef) {}

  private fixNum(value: number): number {
    return Math.min(Math.max(toNumber(value), 0), 100);
  }

  ngOnChanges(): void {
    this.target = this.fixNum(this.target);
    this.percent = this.fixNum(this.percent);
    this.cdr.detectChanges();
  }
}
