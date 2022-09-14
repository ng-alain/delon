import { Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';

import { CellService } from './service';
import { CellWidgetData } from './types';

@Directive({ selector: '[cell-widget-host]' })
export class CellHost implements OnInit {
  @Input() data!: CellWidgetData;

  constructor(private srv: CellService, private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    const widget = this.data.options!.widget!;
    const componentType = this.srv.getWidget(widget.key!)?.ref as Type<unknown>;
    if (componentType == null) {
      return;
    }

    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentType);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (componentRef.instance as any).data = this.data;
  }
}
