import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BooleanInput, InputBoolean } from '@delon/util';
import { LayoutDefaultHeaderItemDirection } from './types';

@Component({
  selector: 'layout-default-header-item',
  template: `
    <ng-template #host>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class LayoutDefaultHeaderItemComponent {
  static ngAcceptInputType_hiddenMobile: BooleanInput;

  @ViewChild('host', { static: true }) host: ElementRef;

  @Input() @InputBoolean() hiddenMobile = false;
  @Input() direction: LayoutDefaultHeaderItemDirection = 'right';
}
