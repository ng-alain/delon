import {
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  inject
} from '@angular/core';
import { Subject } from 'rxjs';

import { NzFormStatusService } from 'ng-zorro-antd/core/form';

import { FormProperty } from './model/form.property';
import { SFUISchemaItem } from './schema/ui';
import { TerminatorService } from './terminator.service';
import type { Widget } from './widget';
import { WidgetFactory } from './widget.factory';

let nextUniqueId = 0;

@Component({
  selector: 'sf-item',
  exportAs: 'sfItem',
  host: { '[class.sf__item]': 'true' },
  template: `
    <ng-template #target />
    <ng-container *ngTemplateOutlet="footer" />
  `,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  providers: [NzFormStatusService]
})
export class SFItemComponent implements OnInit, OnChanges, OnDestroy {
  private readonly widgetFactory = inject(WidgetFactory);
  private readonly terminator = inject(TerminatorService);

  private ref!: ComponentRef<Widget<FormProperty, SFUISchemaItem>>;
  readonly destroy$ = new Subject<void>();
  widget: Widget<FormProperty, SFUISchemaItem> | null = null;

  @Input() formProperty!: FormProperty;
  @Input() footer: TemplateRef<void> | null = null;

  @ViewChild('target', { read: ViewContainerRef, static: true })
  private container!: ViewContainerRef;

  onWidgetInstanciated(widget: Widget<FormProperty, SFUISchemaItem>): void {
    this.widget = widget;
    const id = `_sf-${nextUniqueId++}`;

    const ui = this.formProperty.ui as SFUISchemaItem;
    this.widget.formProperty = this.formProperty;
    this.widget.schema = this.formProperty.schema;
    this.widget.ui = ui;
    this.widget.id = id;
    this.formProperty.widget = widget;
  }

  ngOnInit(): void {
    this.terminator.onDestroy.subscribe(() => this.ngOnDestroy());
  }

  ngOnChanges(): void {
    const p = this.formProperty;
    this.ref = this.widgetFactory.createWidget(this.container, (p.ui.widget || p.schema.type) as string);
    this.onWidgetInstanciated(this.ref.instance);
  }

  ngOnDestroy(): void {
    const { destroy$ } = this;
    destroy$.next();
    destroy$.complete();
    this.ref.destroy();
  }
}
