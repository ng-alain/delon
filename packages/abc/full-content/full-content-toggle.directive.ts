import { Directive, HostListener } from '@angular/core';
import { NaFullContentComponent } from './full-content.component';

@Directive({
  selector: '[na-full-toggle]',
})
export class NaFullContentToggleDirective {
  constructor(private parent: NaFullContentComponent) {}

  @HostListener('click')
  _click() {
    this.parent.toggle();
  }
}
