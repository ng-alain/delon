import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import type { NzTSType } from 'ng-zorro-antd/core/types';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'sv-value, [sv-value]',
  exportAs: 'svValue',
  template: `
    @if (prefix) {
      <em class="sv__value-prefix" [innerHTML]="prefix"></em>
    }
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
    @if (unit) {
      <em class="sv__value-unit" [innerHTML]="unit"></em>
    }
  `,
  host: {
    '[class.sv__value]': 'true',
    '[class.sv__value-small]': `size === 'small'`,
    '[class.sv__value-large]': `size === 'large'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzTooltipDirective]
})
export class SVValueComponent {
  @Input() prefix?: string;
  @Input() unit?: string;
  @Input() tooltip?: NzTSType | null;
  @Input() size: 'large' | 'small' | 'default' = 'default';
}
