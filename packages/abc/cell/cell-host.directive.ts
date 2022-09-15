import { Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';

import { warn } from '@delon/util/other';

import { CellService } from './cell.service';
import { CellWidgetData } from './cell.types';

@Directive({ selector: '[cell-widget-host]' })
export class CellHostDirective implements OnInit {
  @Input() data!: CellWidgetData;

  constructor(private srv: CellService, private viewContainerRef: ViewContainerRef) {}

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (componentRef.instance as any).data = this.data;
  }
}
