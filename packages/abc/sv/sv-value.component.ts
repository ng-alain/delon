import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzTSType } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'sv-value, [sv-value]',
  exportAs: 'svValue',
  template: `
    <em *ngIf="prefix" class="sv__value-prefix" [innerHTML]="prefix"></em>
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content></ng-content></span>
    <em *ngIf="unit" class="sv__value-unit" [innerHTML]="unit"></em>
  `,
  host: {
    '[class.sv__value]': 'true',
    '[class.sv__value-small]': `size === 'small'`,
    '[class.sv__value-large]': `size === 'large'`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SVValueComponent {
  @Input() prefix?: string;
  @Input() unit?: string;
  @Input() tooltip?: NzTSType | null;
  @Input() size: 'large' | 'small' | 'default' = 'default';
}
