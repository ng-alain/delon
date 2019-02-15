import { Component, OnInit } from '@angular/core';
import { ArrayProperty } from '../../model/array.property';
import { FormProperty } from '../../model/form.property';
import { SFGridSchema } from '../../schema/ui';
import { ObjectLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-object',
  templateUrl: './object.widget.html',
})
export class ObjectWidget extends ObjectLayoutWidget implements OnInit {
  grid: SFGridSchema;
  list: Array<{}> = [];
  title: string;

  ngOnInit(): void {
    const { formProperty, ui } = this;
    const { grid, showTitle } = ui;
    if (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true) {
      this.title = this.schema.title;
    }
    this.grid = grid;
    const list: Array<{}> = [];
    for (const key of formProperty.propertiesId) {
      const property = formProperty.properties[key] as FormProperty;
      const item = {
        property,
        grid: property.ui.grid || grid || {},
        spanLabelFixed: property.ui.spanLabelFixed,
        show: property.ui.hidden === false,
      };
      list.push(item);
    }
    this.list = list;
  }
}
