import { Component, OnInit, OnChanges, Input, ViewChild, ViewContainerRef, ComponentRef, ElementRef, Renderer2, OnDestroy, SimpleChanges, AfterViewInit } from '@angular/core';
import { FormProperty } from './model/form.property';
import { Widget } from './widget';
import { WidgetFactory } from './widget.factory';
import { TerminatorService } from './terminator.service';
import { SFUISchemaItem } from './schema/ui';

let nextUniqueId = 0;

@Component({
    selector: 'sf-item',
    template: `<ng-template #target></ng-template>`
})
export class SFItemComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    private el: HTMLDivElement;
    private ref: ComponentRef<any>;
    widget: Widget<any> = null;

    // region: fields

    @Input() formProperty: FormProperty;

    @ViewChild('target', { read: ViewContainerRef }) container: ViewContainerRef;

    // endregion

    // region: fixed label

    @Input('fixed-label') num: number;

    private fixedLabel() {
        if (this.num == null || this.num <= 0) return;
        const widgetEl = this.el.querySelector('.ant-row');
        this.render.addClass(widgetEl, 'sf-fixed');
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        const unit = this.num + 'px';
        if (labelEl) {
            this.render.setStyle(labelEl, 'width', unit);
            this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
        } else {
            const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper');
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    }

    // endregion

    constructor(
        private widgetFactory: WidgetFactory,
        private terminator: TerminatorService,
        er: ElementRef,
        private render: Renderer2
    ) {
        this.el = er.nativeElement as HTMLDivElement;
    }

    onWidgetInstanciated(widget: Widget<any>) {
        this.widget = widget;
        const id = `_sf-${nextUniqueId++}`;

        const ui = this.formProperty.ui as SFUISchemaItem;
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.ui = ui;
        this.widget.id = id;
        this.widget.firstVisual = ui.firstVisual;
        this.formProperty.widget = widget;
    }

    ngOnInit(): void {
        this.terminator.onDestroy.subscribe(() => {
            this.ngOnDestroy();
        });
    }

    ngAfterViewInit(): void {
        this.fixedLabel();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.ref = this.widgetFactory.createWidget(this.container, this.formProperty.ui.widget || this.formProperty.schema.type);
        this.onWidgetInstanciated(this.ref.instance);
    }

    ngOnDestroy(): void {
        this.formProperty.ui.__destroy = true;
        this.ref.destroy();
    }
}
