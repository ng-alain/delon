import { Directive, inject, input } from '@angular/core';

import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseCustomContextMenu, ReuseItem } from './reuse-tab.interfaces';

@Directive({
  selector: '[reuse-tab-context-menu]',
  exportAs: 'reuseTabContextMenu',
  host: {
    '(contextmenu)': '_onContextMenu($event)'
  }
})
export class ReuseTabContextDirective {
  private readonly srv = inject(ReuseTabContextService);

  readonly item = input.required<ReuseItem>({ alias: 'reuse-tab-context-menu' });
  readonly customContextMenu = input.required<ReuseCustomContextMenu[]>();

  protected _onContextMenu(event: MouseEvent): void {
    this.srv.show.next({
      event,
      item: this.item(),
      customContextMenu: this.customContextMenu()
    });
    event.preventDefault();
    event.stopPropagation();
  }
}
