import { Directive, HostListener, Input } from '@angular/core';

import { NaReuseTabContextService } from './reuse-tab-context.service';
import { NaReuseItem } from './interface';

@Directive({
  selector: '[reuse-tab-context-menu]',
})
export class NaReuseTabContextDirective {
  @Input('reuse-tab-context-menu') item: NaReuseItem;

  constructor(private srv: NaReuseTabContextService) {}

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    this.srv.show.next({
      event,
      item: this.item,
    });
    event.preventDefault();
    event.stopPropagation();
  }
}
