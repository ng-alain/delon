import { Directive, HostListener, Input } from '@angular/core';

import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseCustomContextMenu, ReuseItem } from './reuse-tab.interfaces';

@Directive({
  selector: '[reuse-tab-context-menu]',
})
export class ReuseTabContextDirective {
  @Input('reuse-tab-context-menu') item: ReuseItem;
  @Input() customContextMenu: ReuseCustomContextMenu[];

  constructor(private srv: ReuseTabContextService) {}

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    this.srv.show.next({
      event,
      item: this.item,
      customContextMenu: this.customContextMenu,
    });
    event.preventDefault();
    event.stopPropagation();
  }
}
