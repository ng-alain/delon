import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { FormProperty } from './model/form.property';
import { Widget } from './widget';

export class WidgetRegistry {
  private widgets: { [type: string]: Widget<FormProperty> } = {};

  private defaultWidget: Widget<FormProperty>;

  setDefault(widget: any) {
    this.defaultWidget = widget;
  }

  register(type: string, widget: any) {
    this.widgets[type] = widget;
  }

  has(type: string) {
    return this.widgets.hasOwnProperty(type);
  }

  getType(type: string): Widget<FormProperty> {
    if (this.has(type)) {
      return this.widgets[type];
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
    const componentFactory = this.resolver.resolveComponentFactory<Widget<FormProperty>>(
      componentClass,
    );
    return container.createComponent(componentFactory);
  }
}
