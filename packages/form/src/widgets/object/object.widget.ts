import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, signal } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import type { SFObjectWidgetRenderType } from './schema';
import { ArrayProperty } from '../../model/array.property';
import { FormProperty } from '../../model/form.property';
import type { SFGridSchema } from '../../schema/ui';
import { toBool } from '../../utils';
import { ObjectLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-object',
  template: `@let isExpand = expand();
    <ng-template #default let-noTitle>
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
        [nzSize]="ui.cardSize ?? 'small'"
        [nzActions]="ui.cardActions ?? []"
        [nzBodyStyle]="ui.cardBodyStyle!"
        [nzBordered]="ui.cardBordered ?? true"
        class="sf__object-card"
        [class.sf__object-card-fold]="!isExpand"
      >
        <ng-template #cardTitleTpl>
          <div [class.point]="showExpand" (click)="changeExpand()">
            @if (showExpand) {
              <nz-icon [nzType]="isExpand ? 'down' : 'up'" class="mr-xs text-xs" />
            }
            {{ title }}
            @if (ui.optional || oh) {
              <span class="sf__optional">
                {{ ui.optional }}
                @if (oh) {
                  <nz-icon
                    nz-tooltip
                    [nzTooltipTitle]="oh.text"
                    [nzTooltipPlacement]="oh.placement"
                    [nzTooltipTrigger]="oh.trigger"
                    [nzTooltipColor]="oh.bgColor"
                    [nzTooltipOverlayClassName]="oh.overlayClassName"
                    [nzTooltipOverlayStyle]="oh.overlayStyle"
                    [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                    [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                    [nzType]="oh.icon!"
                  />
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class ObjectWidget extends ObjectLayoutWidget implements OnInit {
  grid: NzSafeAny;
  type: SFObjectWidgetRenderType = 'default';
  list: NzSafeAny[] = [];
  title?: string;
  showExpand = true;

  protected readonly expand = signal(true);

  ngOnInit(): void {
    const { formProperty, ui } = this;
    const { grid, showTitle, type } = ui;
    this.showExpand = toBool(ui.showExpand, true);
    this.expand.set(toBool(ui.expand, true));
    this.type = type ?? 'default';
    // 默认渲染下只有「非根字段、父级不是数组、且显式 showTitle === true」才用 schema.title 作标题
    if (
      this.type === 'card' ||
      (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true)
    ) {
      this.title = this.schema.title as string;
    }
    this.grid = grid as SFGridSchema;
    const list: NzSafeAny[] = [];
    for (const key of formProperty.propertiesId) {
      const property = (formProperty.properties as Record<string, FormProperty>)[key] as FormProperty;
      // `show` 只看 `ui.hidden === false`（未显式设置即隐藏），与动态的 `property.visible` 是两个来源
      const item = {
        property,
        grid: property.ui.grid ?? grid ?? {},
        spanLabelFixed: property.ui.spanLabelFixed,
        show: property.ui.hidden === false
      };
      list.push(item);
    }
    this.list = list;
  }

  changeExpand(): void {
    // 标题上的点击始终绑定，`showExpand` 为 false 时只能在这里拦截
    if (!this.showExpand) {
      return;
    }
    this.expand.set(!this.expand());
  }
}
