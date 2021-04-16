import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { NzButtonType } from 'ng-zorro-antd/button';
import { FormProperty } from '../../model/form.property';
import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array',
  templateUrl: './array.widget.html',
  host: { '[class.sf__array]': 'true' },
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class ArrayWidget extends ArrayLayoutWidget implements OnInit {
  addTitle: SafeHtml;
  addType: NzButtonType;
  removeTitle: string | null;
  arraySpan = 8;

  get addDisabled(): boolean {
    return (
      this.disabled || (this.schema.maxItems != null && (this.formProperty.properties as FormProperty[]).length >= this.schema.maxItems!)
    );
  }

  get showRemove(): boolean {
    return !this.disabled && !!this.removeTitle;
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

  private reValid(): void {
    this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: true });
  }

  addItem(): void {
    const property = this.formProperty.add({});
    this.reValid();
    if (this.ui.add) {
      this.ui.add(property);
    }
  }

  removeItem(index: number): void {
    this.formProperty.remove(index);
    this.reValid();
    if (this.ui.remove) {
      this.ui.remove(index);
    }
  }
}
