import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  inject
} from '@angular/core';

import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzSpinComponent } from 'ng-zorro-antd/spin';

@Component({
  selector: 'g2-card',
  exportAs: 'g2Card',
  templateUrl: './card.component.html',
  host: { '[class.g2-card]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzCardComponent, NzSpinComponent, NzStringTemplateOutletDirective]
})
export class G2CardComponent implements OnChanges {
  private readonly cdr = inject(ChangeDetectorRef);
  /** 是否显示边框 */
  @Input({ transform: booleanAttribute }) bordered = false;
  @Input() avatar?: string | TemplateRef<void> | null;
  @Input() title?: string | TemplateRef<void> | null;
  @Input() action?: string | TemplateRef<void> | null;
  @Input() total = '';
  _height = 'auto';
  _orgHeight!: number | string;
  @Input()
  set contentHeight(value: number | string) {
    this._orgHeight = value;
    this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
  }
  @Input() footer?: string | TemplateRef<void> | null;
  /** 是否显示Loading */
  @Input({ transform: booleanAttribute }) loading = false;

  ngOnChanges(): void {
    this.cdr.detectChanges();
  }
}
