import { Directive, HostListener } from '@angular/core';
import { FullContentComponent } from './full-content.component';

@Directive({
    selector: '[full-toggle]'
})
export class FullContentToggleDirective {
    constructor(private parent: FullContentComponent) {}

    @HostListener('click')
    _click() {
        this.parent.toggle();
    }
}
