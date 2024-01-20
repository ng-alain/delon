import { Directive, Input, OnInit, Type, ViewContainerRef, inject } from '@angular/core';

import { warn } from '@delon/util/other';

import { CellService } from './cell.service';
import { CellWidgetData } from './cell.types';

@Directive({
  selector: '[cell-widget-host]',
  standalone: true
})
export class CellHostDirective implements OnInit {
  private readonly srv = inject(CellService);
  private readonly viewContainerRef = inject(ViewContainerRef);

  @Input() data!: CellWidgetData;

  ngOnInit(): void {
    const widget = this.data.options!.widget!;
    const componentType = this.srv.getWidget(widget.key!)?.ref as Type<unknown>;
    if (componentType == null) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        warn(`cell: No widget for type "${widget.key}"`);
      }
      return;
    }

    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentType);
    (componentRef.instance as { data: CellWidgetData }).data = this.data;
  }
}
