import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { InputBoolean } from '@delon/util';

@Component({
  selector: 'global-footer-item',
  template: `<ng-template #host><ng-content></ng-content></ng-template>`,
})
export class GlobalFooterItemComponent {
  @ViewChild('host')
  host: ElementRef;

  @Input()
  href: string;

  @Input()
  @InputBoolean()
  blankTarget: boolean;
}
