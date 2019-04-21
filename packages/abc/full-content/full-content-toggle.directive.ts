import { Directive } from '@angular/core';
import { FullContentComponent } from './full-content.component';

@Directive({
  selector: '[full-toggle]',
  exportAs: 'fullToggle',
  host: {
    '(click)': '_click()',
  },
})
export class FullContentToggleDirective {
  constructor(private parent: FullContentComponent) {}

  _click() {
    this.parent.toggle();
  }
}
