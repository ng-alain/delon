import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ArrayProperty } from '../../model/array.property';
import { FormProperty } from '../../model/form.property';
import { SFGridSchema } from '../../schema/ui';
import { toBool } from '../../utils';
import { ObjectLayoutWidget } from '../../widget';
import { SFObjectWidgetRenderType } from './schema';

@Component({
  selector: 'sf-object',
  templateUrl: './object.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class ObjectWidget extends ObjectLayoutWidget implements OnInit {
  grid: any;
  type: SFObjectWidgetRenderType = 'default';
  list: any[] = [];
  title: string;
  showExpand = true;
  expand = true;

  ngOnInit(): void {
    const { formProperty, ui } = this;
    const { grid, showTitle, type } = ui;
    this.showExpand = toBool(ui.showExpand, true);
    this.expand = toBool(ui.expand, true);
    this.type = type ?? 'default';
    if (
      this.type === 'card' ||
      (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true)
    ) {
      this.title = this.schema.title as string;
    }
    this.grid = grid as SFGridSchema;
    const list: NzSafeAny[] = [];
    for (const key of formProperty.propertiesId) {
      const property = (formProperty.properties as { [key: string]: FormProperty })[key] as FormProperty;
      const item = {
        property,
        grid: property.ui.grid || grid || {},
        spanLabelFixed: property.ui.spanLabelFixed,
        show: property.ui.hidden === false
      };
      list.push(item);
    }
    this.list = list;
  }

  changeExpand(): void {
    if (!this.showExpand) {
      return;
    }
    this.expand = !this.expand;
    this.detectChanges(true);
  }
}
