import { Directive } from '@angular/core';

@Directive({
  selector: '[layout-default-header-item-trigger]',
  host: { class: 'alain-default__nav-item' },
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class LayoutDefaultHeaderItemTriggerDirective {}
