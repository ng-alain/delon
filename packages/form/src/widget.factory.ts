import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { FormProperty } from './model/form.property';
import { Widget } from './widget';

export class WidgetRegistry {
  private _widgets: { [type: string]: Widget<FormProperty> } = {};

  private defaultWidget: Widget<FormProperty>;

  get widgets() {
    return this._widgets;
  }

  setDefault(widget: any) {
    this.defaultWidget = widget;
  }

  register(type: string, widget: any) {
    this._widgets[type] = widget;
  }

  has(type: string) {
    return this._widgets.hasOwnProperty(type);
  }

  getType(type: string): Widget<FormProperty> {
    if (this.has(type)) {
      return this._widgets[type];
    }
    return this.defaultWidget;
  }
}

@Injectable()
export class WidgetFactory {
  constructor(private registry: WidgetRegistry, private resolver: ComponentFactoryResolver) {}

  createWidget(container: ViewContainerRef, type: string): ComponentRef<Widget<FormProperty>> {
    if (!this.registry.has(type)) {
      console.warn(`No widget for type "${type}"`);
    }

    const componentClass = this.registry.getType(type) as any;
    const componentFactory = this.resolver.resolveComponentFactory<Widget<FormProperty>>(componentClass);
    return container.createComponent(componentFactory);
  }
}
