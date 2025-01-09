import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden } from './types';

@Component({
  selector: 'layout-default-header-item',
  template: `
    <ng-template #host>
      <ng-content />
    </ng-template>
  `,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class LayoutDefaultHeaderItemComponent {
  @ViewChild('host', { static: true }) host!: TemplateRef<void>;

  @Input() hidden: LayoutDefaultHeaderItemHidden = 'none';
  @Input() direction: LayoutDefaultHeaderItemDirection = 'right';
}
