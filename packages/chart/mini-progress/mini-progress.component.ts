import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { toNumber, InputNumber } from '@delon/util';

@Component({
  selector: 'g2-mini-progress',
  templateUrl: './mini-progress.component.html',
  host: { '[class.g2-mini-progress]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2MiniProgressComponent implements OnChanges {
  @Input() color = '#1890FF';
  @Input() @InputNumber() target: number;
  @Input() @InputNumber() percent: number;
  @Input() @InputNumber() strokeWidth: number;

  constructor(public i18n: DelonLocaleService, private cdr: ChangeDetectorRef) {}

  private fixNum(value: number) {
    return Math.min(Math.max(toNumber(value), 0), 100);
  }

  ngOnChanges() {
    this.target = this.fixNum(this.target);
    this.percent = this.fixNum(this.percent);
    this.cdr.detectChanges();
  }
}
