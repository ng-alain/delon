import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { STWidgetRegistry } from './st-widget';
import { STColumn, STData } from './st.interfaces';

@Directive({ selector: '[st-widget-host]' })
export class STWidgetHostDirective implements OnInit {
  @Input() record: STData;
  @Input() column: STColumn;

  constructor(
    private stWidgetRegistry: STWidgetRegistry,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    const widget = this.column.widget!;
    const componentType = this.stWidgetRegistry.get(widget.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType as any);

    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    const { record, column } = this;
    const data: { [key: string]: any } = widget.params ? widget.params({ record, column }) : { record };
    Object.keys(data).forEach(key => {
      (componentRef.instance as any)[key] = data[key];
    });
  }
}
