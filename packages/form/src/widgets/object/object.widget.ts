import { Component, OnInit } from '@angular/core';
import { FormProperty } from '../../model/form.property';
import { SFGridSchema } from '../../schema/ui';
import { ObjectLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-object',
  template: `
  <ng-container *ngIf="grid; else noGrid">
    <div nz-row [nzGutter]="grid.gutter">
      <ng-container *ngFor="let i of list">
        <ng-container *ngIf="i.property.visible && i.show">
          <div nz-col
            [nzSpan]="i.grid.span" [nzOffset]="i.grid.offset"
            [nzXs]="i.grid.xs" [nzSm]="i.grid.sm" [nzMd]="i.grid.md"
            [nzLg]="i.grid.lg" [nzXl]="i.grid.xl" [nzXXl]="i.grid.xxl">
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed"></sf-item>
          </div>
        </ng-container>
      </ng-container>
    </div>
  </ng-container>
  <ng-template #noGrid>
    <ng-container *ngFor="let i of list">
      <ng-container *ngIf="i.property.visible && i.show">
        <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed"></sf-item>
      </ng-container>
    </ng-container>
  </ng-template>`,
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
