import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import type { SFObjectWidgetRenderType } from './schema';
import { ArrayProperty } from '../../model/array.property';
import { FormProperty } from '../../model/form.property';
import type { SFGridSchema } from '../../schema/ui';
import { toBool } from '../../utils';
import { ObjectLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-object',
  template: `<ng-template #default let-noTitle>
      @if (!noTitle && title) {
        <div class="sf__title">{{ title }}</div>
      }
      @if (grid) {
        <div nz-row [nzGutter]="grid.gutter">
          @for (i of list; track $index) {
            @if (i.property.visible && i.show) {
              <div
                nz-col
                [nzSpan]="i.grid.span"
                [nzOffset]="i.grid.offset"
                [nzXs]="i.grid.xs"
                [nzSm]="i.grid.sm"
                [nzMd]="i.grid.md"
                [nzLg]="i.grid.lg"
                [nzXl]="i.grid.xl"
                [nzXXl]="i.grid.xxl"
              >
                <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
              </div>
            }
          }
        </div>
      } @else {
        @for (i of list; track $index) {
          @if (i.property.visible && i.show) {
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
          }
        }
      }
    </ng-template>
    @if (type === 'card') {
      <nz-card
        [nzTitle]="cardTitleTpl"
        [nzExtra]="ui.cardExtra"
        [nzSize]="ui.cardSize || 'small'"
        [nzActions]="ui.cardActions || []"
        [nzBodyStyle]="ui.cardBodyStyle!"
        [nzBordered]="ui.cardBordered || true"
        [nzBorderless]="ui.cardBorderless || false"
        class="sf__object-card"
        [class.sf__object-card-fold]="!expand"
      >
        <ng-template #cardTitleTpl>
          <div [class.point]="showExpand" (click)="changeExpand()">
            @if (showExpand) {
              <i nz-icon [nzType]="expand ? 'down' : 'up'" class="mr-xs text-xs"></i>
            }
            {{ title }}
            @if (ui.optional || oh) {
              <span class="sf__optional">
                {{ ui.optional }}
                @if (oh) {
                  <i
                    s
                    nz-tooltip
                    [nzTooltipTitle]="oh.text"
                    [nzTooltipPlacement]="oh.placement"
                    [nzTooltipTrigger]="oh.trigger"
                    [nzTooltipColor]="oh.bgColor"
                    [nzTooltipOverlayClassName]="oh.overlayClassName"
                    [nzTooltipOverlayStyle]="oh.overlayStyle"
                    [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                    [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                    nz-icon
                    [nzType]="oh.icon!"
                  ></i>
                }
              </span>
            }
          </div>
        </ng-template>
        <ng-template [ngTemplateOutlet]="default" [ngTemplateOutletContext]="{ $implicit: true }" />
      </nz-card>
    } @else {
      <ng-template [ngTemplateOutlet]="default" />
    }`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class ObjectWidget extends ObjectLayoutWidget implements OnInit {
  grid: NzSafeAny;
  type: SFObjectWidgetRenderType = 'default';
  list: NzSafeAny[] = [];
  title?: string;
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
