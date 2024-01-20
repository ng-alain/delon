import { Directive, inject } from '@angular/core';

import { FullContentComponent } from './full-content.component';

@Directive({
  selector: '[full-toggle]',
  exportAs: 'fullToggle',
  host: {
    '(click)': '_click()'
  },
  standalone: true
})
export class FullContentToggleDirective {
  private readonly parent = inject(FullContentComponent);

  _click(): void {
    this.parent.toggle();
  }
}
