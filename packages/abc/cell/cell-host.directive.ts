import { Directive, Type, ViewContainerRef, effect, inject, input } from '@angular/core';

import { warn } from '@delon/util/other';

import { CellService } from './cell.service';
import { CellTextResult } from './cell.types';

@Directive({
  selector: '[cell-widget-host]'
})
export class CellHostDirective {
  private readonly srv = inject(CellService);
  private readonly vcr = inject(ViewContainerRef);

  data = input.required<CellTextResult>();

  constructor() {
    effect(() => {
      const data = this.data();
      const widget = data.options.widget!;
      const componentType = this.srv.getWidget(widget.key!)?.ref as Type<unknown>;
      if (componentType == null) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          warn(`cell: No widget for type "${widget.key}"`);
        }
        return;
      }

      this.vcr.clear();
      const componentRef = this.vcr.createComponent(componentType);
      (componentRef.instance as { data: CellTextResult }).data = data;
    });
  }
}
