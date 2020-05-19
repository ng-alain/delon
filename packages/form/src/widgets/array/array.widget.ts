import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { FormProperty } from '../../model/form.property';
import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array',
  templateUrl: './array.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class ArrayWidget extends ArrayLayoutWidget implements OnInit {
  addTitle: SafeHtml;
  addType: string;
  removeTitle: string | null;
  arraySpan = 8;

  get addDisabled() {
    return this.disabled || (this.schema.maxItems && (this.formProperty.properties as FormProperty[]).length >= this.schema.maxItems);
  }

  get showRemove() {
    return !this.disabled && this.removeTitle;
  }

  ngOnInit(): void {
    const { grid, addTitle, addType, removable, removeTitle } = this.ui;
    if (grid && grid.arraySpan) {
      this.arraySpan = grid.arraySpan;
    }

    this.addTitle = this.dom.bypassSecurityTrustHtml(addTitle || this.l.addText);
    this.addType = addType || 'dashed';
    this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
  }

  addItem() {
    const property = this.formProperty.add({});
    if (this.ui.add) {
      this.ui.add(property);
    }
  }

  removeItem(index: number) {
    this.formProperty.remove(index);
    if (this.ui.remove) {
      this.ui.remove(index);
    }
  }
}
