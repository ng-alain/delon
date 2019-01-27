import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.grid = this.ui.grid;
    const list: Array<{}> = [];
    for (const key of this.formProperty.propertiesId) {
      const property = this.formProperty.properties[key] as FormProperty;
      const item = {
        property,
        grid: property.ui.grid || this.grid || {},
        spanLabelFixed: property.ui.spanLabelFixed,
        show: property.ui.hidden === false,
      };
      list.push(item);
    }
    this.list = list;
  }
}
