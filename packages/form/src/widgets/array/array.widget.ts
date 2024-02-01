import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { NzButtonType } from 'ng-zorro-antd/button';

import { SFUpdateValueAndValidity } from '../../interface';
import type { FormProperty } from '../../model/form.property';
import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array',
  template: `<nz-form-item [class.ant-form-item-with-help]="showError">
    @if (schema.title) {
      <div nz-col [nzSpan]="ui.spanLabel!" class="ant-form-item-label">
        <label [class.ant-form-item-required]="ui.required">
          {{ schema.title }}
          <span class="sf__optional">
            {{ ui.optional }}
            @if (oh) {
              <i
                nz-tooltip
                [nzTooltipTitle]="oh.text"
                [nzTooltipPlacement]="oh.placement"
                [nzTooltipTrigger]="oh.trigger"
                [nzTooltipOverlayClassName]="oh.overlayClassName"
                [nzTooltipOverlayStyle]="oh.overlayStyle"
                [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                nz-icon
                [nzType]="oh.icon!"
              ></i>
            }
          </span>
        </label>
        <div class="sf__array-add">
          <button
            type="button"
            nz-button
            [nzType]="addType"
            [disabled]="addDisabled"
            (click)="addItem()"
            [innerHTML]="addTitle"
          ></button>
        </div>
      </div>
    }
    <div nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl!" [nzOffset]="ui.offsetControl!">
      <div class="ant-form-item-control" [class.has-error]="showError">
        <div nz-row class="sf__array-container">
          <ng-container *ngFor="let i of $any(formProperty).properties; let $index = index">
            @if (i.visible && !i.ui.hidden) {
              <div nz-col [nzSpan]="arraySpan" [attr.data-index]="$index" class="sf__array-item">
                <nz-card>
                  <sf-item [formProperty]="i" />
                  @if (showRemove) {
                    <span class="sf__array-remove" (click)="removeItem($index)" [attr.title]="removeTitle">
                      <i nz-icon nzType="delete"></i>
                    </span>
                  }
                </nz-card>
              </div>
            }
          </ng-container>
        </div>
        @if (!ui.onlyVisual && showError) {
          <div class="ant-form-explain">{{ error }}</div>
        }
        @if (schema.description) {
          <div [innerHTML]="ui._description" class="ant-form-extra"></div>
        }
      </div>
    </div>
  </nz-form-item>`,
  host: { '[class.sf__array]': 'true' },
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class ArrayWidget extends ArrayLayoutWidget implements OnInit {
  addTitle!: SafeHtml;
  addType!: NzButtonType;
  removeTitle?: string | null;
  arraySpan = 8;

  get addDisabled(): boolean {
    return (
      this.disabled ||
      (this.schema.maxItems != null && (this.formProperty.properties as FormProperty[]).length >= this.schema.maxItems!)
    );
  }

  get showRemove(): boolean {
    if (this.disabled || !this.removeTitle) return false;
    if (
      this.schema.minItems != null &&
      (this.formProperty.properties as FormProperty[]).length <= this.schema.minItems!
    )
      return false;
    return true;
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

  private reValid(options?: SFUpdateValueAndValidity): void {
    this.formProperty.updateValueAndValidity({
      onlySelf: false,
      emitValueEvent: false,
      emitValidator: true,
      ...options
    });
  }

  addItem(): void {
    const property = this.formProperty.add({});
    this.reValid();
    this.ui.add?.(property);
  }

  removeItem(index: number): void {
    const updatePath = (this.formProperty.properties as FormProperty[])[index].path;
    this.formProperty.remove(index);
    this.reValid({ updatePath, emitValueEvent: true });
    this.ui.remove?.(index);
  }
}
