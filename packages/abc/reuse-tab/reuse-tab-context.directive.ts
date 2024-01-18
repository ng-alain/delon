import { Directive, Input, inject } from '@angular/core';

import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseCustomContextMenu, ReuseItem } from './reuse-tab.interfaces';

@Directive({
  selector: '[reuse-tab-context-menu]',
  exportAs: 'reuseTabContextMenu',
  host: {
    '(contextmenu)': '_onContextMenu($event)'
  },
  standalone: true
})
export class ReuseTabContextDirective {
  private readonly srv = inject(ReuseTabContextService);

  @Input('reuse-tab-context-menu') item!: ReuseItem;
  @Input() customContextMenu!: ReuseCustomContextMenu[];

  _onContextMenu(event: MouseEvent): void {
    this.srv.show.next({
      event,
      item: this.item,
      customContextMenu: this.customContextMenu
    });
    event.preventDefault();
    event.stopPropagation();
  }
}
