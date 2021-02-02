import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';

@Component({
  selector: 'g2-card',
  exportAs: 'g2Card',
  templateUrl: './card.component.html',
  host: { '[class.g2-card]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2CardComponent implements OnChanges {
  static ngAcceptInputType_bordered: BooleanInput;
  static ngAcceptInputType_loading: BooleanInput;

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
