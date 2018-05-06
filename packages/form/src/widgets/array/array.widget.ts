import { Component, OnInit } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array',
  template: `
  <nz-form-item>
    <nz-col *ngIf="schema.title" [nzSpan]="ui.spanLabel" class="ant-form-item-label">
      <label>
        {{ schema.title }}
        <span class="optional">
          {{ ui.optional }}
          <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
            <i nz-tooltip class="anticon anticon-question-circle-o"></i>
          </nz-tooltip>
        </span>
      </label>
      <div class="add">
        <button nz-button [nzType]="addType" [disabled]="addDisabled" (click)="addItem()" [innerHTML]="addTitle"></button>
      </div>
    </nz-col>
    <nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl" [nzOffset]="ui.offsetControl">
      <div class="ant-form-item-control" [class.has-error]="showError">

        <nz-row class="sf-array-container">
          <ng-container *ngFor="let i of formProperty.properties; let idx=index">
            <nz-col [nzSpan]="arraySpan" *ngIf="i.visible">
              <nz-card>
                <sf-item [formProperty]="i"></sf-item>
                <span *ngIf="removeTitle" class="remove" (click)="removeItem(idx)" [attr.title]="removeTitle">
                  <i class="anticon anticon-delete"></i>
                </span>
              </nz-card>
            </nz-col>
          </ng-container>
        </nz-row>

        <nz-form-extra *ngIf="schema.description" [innerHTML]="schema.description"></nz-form-extra>
        <nz-form-explain *ngIf="!ui.onlyVisual && showError">{{error}}</nz-form-explain>

      </div>
    </nz-col>
  </nz-form-item>
  `
})
export class ArrayWidget extends ArrayLayoutWidget implements OnInit {
  addTitle: string;
  addType: string;
  removeTitle: string;
  arraySpan = 8;

  get addDisabled() {
    return (
      this.schema.maxItems &&
      (this.formProperty.properties as any[]).length >= this.schema.maxItems
    );
  }

  ngOnInit(): void {
    if (this.ui.grid && this.ui.grid.arraySpan)
      this.arraySpan = this.ui.grid.arraySpan;

    this.addTitle = this.ui.addTitle || '添加';
    this.addType = this.ui.addType || 'dashed';
    this.removeTitle =
      this.ui.removable === false ? null : this.ui.removeTitle || '移除';
  }

  addItem() {
    this.formProperty.add();
  }

  removeItem(index: number) {
    this.formProperty.remove(index);
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}
