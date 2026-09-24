import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input
} from '@angular/core';

import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzSpinComponent } from 'ng-zorro-antd/spin';

@Component({
  selector: 'g2-card',
  exportAs: 'g2Card',
  templateUrl: './card.component.html',
  host: { '[class.g2-card]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzCardComponent, NzSpinComponent, NzStringTemplateOutletDirective]
})
export class G2CardComponent {
  /** 是否显示边框 */
  readonly bordered = input(false, { transform: booleanAttribute });
  readonly avatar = input<string | TemplateRef<void> | null>();
  readonly title = input<string | TemplateRef<void> | null>();
  readonly action = input<string | TemplateRef<void> | null>();
  readonly total = input('');
  readonly contentHeight = input<number | string>();
  readonly footer = input<string | TemplateRef<void> | null>();
  /** 是否显示Loading */
  readonly loading = input(false, { transform: booleanAttribute });

  protected readonly _height = computed(() => {
    const v = this.contentHeight();
    return typeof v === 'number' ? `${v}px` : v;
  });
}
