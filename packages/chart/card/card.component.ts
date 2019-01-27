import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  TemplateRef,
} from '@angular/core';
import { InputBoolean } from '@delon/util';

@Component({
  selector: 'g2-card',
  templateUrl: './card.component.html',
  host: { '[class.g2-card]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2CardComponent implements OnChanges {
  /** 是否显示边框 */
  @Input() @InputBoolean() bordered = false;
  @Input() avatar: string | TemplateRef<void>;
  @Input() title: string | TemplateRef<void>;
  @Input() action: string | TemplateRef<void>;
  @Input() total = '';
  _height = 'auto';
  _orgHeight: number | string;
  @Input()
  set contentHeight(value: number | string) {
    this._orgHeight = value;
    this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
  }
  @Input() footer: string | TemplateRef<void>;
  /** 是否显示Loading */
  @Input() @InputBoolean() loading = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(): void {
    this.cdr.detectChanges();
  }
}
