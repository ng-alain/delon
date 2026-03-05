import { Directive, inject } from '@angular/core';

import { FullContentComponent } from './full-content.component';

@Directive({
  selector: '[full-toggle]',
  exportAs: 'fullToggle',
  host: {
    '(click)': '_click()'
  }
})
export class FullContentToggleDirective {
  private readonly parent = inject(FullContentComponent);

  protected _click(): void {
    this.parent.toggle();
  }
}
