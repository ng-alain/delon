import {
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { FormProperty } from './model/form.property';
import { SFUISchemaItem } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { Widget } from './widget';
import { WidgetFactory } from './widget.factory';

let nextUniqueId = 0;

@Component({
  selector: 'sf-item',
  template: `
    <ng-template #target></ng-template>
  `,
})
export class SFItemComponent implements OnInit, OnChanges, OnDestroy {
  private ref: ComponentRef<Widget<FormProperty>>;
  readonly unsubscribe$ = new Subject<void>();
  widget: Widget<FormProperty> = null;

  @Input() formProperty: FormProperty;

  @ViewChild('target', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private widgetFactory: WidgetFactory, private terminator: TerminatorService) {}

  onWidgetInstanciated(widget: Widget<FormProperty>) {
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
    this.terminator.onDestroy.subscribe(() => this.ngOnDestroy());
  }

  ngOnChanges(): void {
    this.ref = this.widgetFactory.createWidget(this.container, (this.formProperty.ui.widget ||
      this.formProperty.schema.type) as string);
    this.onWidgetInstanciated(this.ref.instance);
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
    this.ref.destroy();
  }
}
