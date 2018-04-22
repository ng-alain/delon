import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { Widget } from './widget';

export class WidgetRegistry {
    private widgets: { [type: string]: any } = {};

    private defaultWidget: any;

    setDefault(widget: any) {
        this.defaultWidget = widget;
    }

    register(type: string, widget: any) {
        this.widgets[type] = widget;
    }

    has(type: string) {
        return this.widgets.hasOwnProperty(type);
    }

    getType(type: string): any {
        if (this.has(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    }
}

@Injectable()
export class WidgetFactory {
    private resolver: ComponentFactoryResolver;
    private registry: WidgetRegistry;

    constructor(registry: WidgetRegistry, resolver: ComponentFactoryResolver) {
        this.registry = registry;
        this.resolver = resolver;
    }

    createWidget(container: ViewContainerRef, type: string): ComponentRef<Widget<any>> {
        if (!this.registry.has(type)) {
            console.warn(`No widget for type "${type}"`);
        }

        const componentClass = this.registry.getType(type);
        const componentFactory = this.resolver.resolveComponentFactory<Widget<any>>(componentClass);
        return container.createComponent(componentFactory);
    }
}
