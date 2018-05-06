import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { FormProperty } from './model/form.property';
import { Widget } from './widget';
import { WidgetFactory } from './widget.factory';
import { TerminatorService } from './terminator.service';
import { SFUISchemaItem } from './schema/ui';

let nextUniqueId = 0;

@Component({
  selector: 'sf-item',
  template: `<ng-template #target></ng-template>`,
})
export class SFItemComponent implements OnInit, OnChanges, OnDestroy {
  private ref: ComponentRef<any>;
  widget: Widget<any> = null;

  // region: fields

  @Input() formProperty: FormProperty;

  @ViewChild('target', { read: ViewContainerRef })
  container: ViewContainerRef;

  // endregion

  constructor(
    private widgetFactory: WidgetFactory,
    private terminator: TerminatorService,
  ) {}

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

  ngOnChanges(changes: SimpleChanges): void {
    this.ref = this.widgetFactory.createWidget(
      this.container,
      this.formProperty.ui.widget || this.formProperty.schema.type,
    );
    this.onWidgetInstanciated(this.ref.instance);
  }

  ngOnDestroy(): void {
    this.formProperty.ui.__destroy = true;
    this.ref.destroy();
  }
}
