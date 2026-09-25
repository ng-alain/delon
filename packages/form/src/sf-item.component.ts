import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  effect,
  inject,
  input,
  viewChild
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
  host: {
    class: 'sf__item',
    '[class.sf__collapse-item]': 'formProperty().ui?.collapse'
  },
  template: `
    <ng-template #target />
    <ng-container *ngTemplateOutlet="footer()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [NzFormStatusService],
  imports: [NgTemplateOutlet]
})
export class SFItemComponent implements OnInit, OnDestroy {
  private readonly widgetFactory = inject(WidgetFactory);
  private readonly terminator = inject(TerminatorService);

  readonly destroy$ = new Subject<void>();
  widget: Widget<FormProperty, SFUISchemaItem> | null = null;

  readonly formProperty = input.required<FormProperty>();
  readonly footer = input<TemplateRef<void> | null>(null);

  private readonly container = viewChild('target', { read: ViewContainerRef });

  constructor() {
    // 创建 widget 是一段命令式的动态组件编排，用 effect 表达「formProperty 与容器就绪时创建」。
    // `container` 是 signal 查询：视图尚未创建时返回 undefined，就绪后本 effect 会自动重跑。
    effect(onCleanup => {
      const container = this.container();
      const p = this.formProperty();
      if (!container || !p) {
        return;
      }
      const ref = this.widgetFactory.createWidget(container, (p.ui.widget ?? p.schema.type) as string);
      this.onWidgetInstanciated(ref.instance);
      // `p.ui.widget` / `p.schema.type` 也在本 effect 的依赖里：它们变了 effect 会重跑，
      // 那时必须先销毁上一个 widget，否则容器里会同时留下两个控件
      onCleanup(() => ref.destroy());
    });
  }

  onWidgetInstanciated(widget: Widget<FormProperty, SFUISchemaItem>): void {
    this.widget = widget;
    const id = `_sf-${nextUniqueId++}`;

    const ui = this.formProperty().ui as SFUISchemaItem;
    this.widget.formProperty = this.formProperty();
    this.widget.schema = this.formProperty().schema;
    this.widget.ui = ui;
    this.widget.id = id;
    this.formProperty().widget = widget;
  }

  ngOnInit(): void {
    // `refreshSchema()` 会通过 `TerminatorService` 通知旧属性树上的 widget 容器清理
    this.terminator.onDestroy.subscribe(() => this.ngOnDestroy());
  }

  ngOnDestroy(): void {
    const { destroy$ } = this;
    destroy$.next();
    destroy$.complete();
  }
}
