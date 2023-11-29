import { Component, ViewEncapsulation } from '@angular/core';

import { SFCheckboxWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-checkbox',
  template: `<ng-template #all>
      @if (ui.checkAll) {
        <label
          nz-checkbox
          class="sf__checkbox-all mr-sm"
          [(ngModel)]="allChecked"
          (ngModelChange)="onAllChecked()"
          [nzIndeterminate]="indeterminate"
        >
          {{ ui.checkAllText || l.checkAllText }}
        </label>
      }
    </ng-template>
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="true"
      [title]="labelTitle"
    >
      @if (inited) {
        @if (data.length === 0) {
          <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="_setValue($event)">
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
        } @else {
          @if (grid_span === 0) {
            <ng-template [ngTemplateOutlet]="all" />
            <nz-checkbox-group [ngModel]="data" (ngModelChange)="notifySet()" />
          } @else {
            <nz-checkbox-wrapper class="sf__checkbox-list" (nzOnChange)="groupInGridChange($event)">
              <div nz-row>
                @if (ui.checkAll) {
                  <div nz-col [nzSpan]="grid_span">
                    <ng-template [ngTemplateOutlet]="all" />
                  </div>
                }
                @for (i of data; track $index) {
                  <div nz-col [nzSpan]="grid_span">
                    <label nz-checkbox [nzValue]="i.value" [ngModel]="i.checked" [nzDisabled]="i.disabled">
                      {{ i.label }}
                    </label>
                  </div>
                }
              </div>
            </nz-checkbox-wrapper>
          }
        }
      }
    </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class CheckboxWidget extends ControlUIWidget<SFCheckboxWidgetSchema> {
  data: SFSchemaEnum[] = [];
  allChecked = false;
  indeterminate = false;
  grid_span!: number;
  labelTitle: string = ``;
  inited = false;

  reset(value: SFValue): void {
    this.inited = false;
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data = list;
      this.allChecked = false;
      this.indeterminate = false;
      this.labelTitle = list.length === 0 ? '' : (this.schema.title as string);
      const { span } = this.ui;
      this.grid_span = span && span > 0 ? span : 0;

      this.updateAllChecked();
      this.inited = true;
      this.detectChanges();
    });
  }

  _setValue(value: SFValue): void {
    this.setValue(value);
    this.detectChanges();
    this.notifyChange(value);
  }

  notifySet(): void {
    const checkList = this.data.filter(w => w.checked);
    this.updateAllChecked().setValue(checkList.map(item => item.value));
    this.notifyChange(checkList);
  }

  groupInGridChange(values: SFValue[]): void {
    this.data.forEach(item => (item.checked = values.indexOf(item.value) !== -1));
    this.notifySet();
  }

  onAllChecked(): void {
    this.data.forEach(item => (item.checked = this.allChecked));
    this.notifySet();
  }

  updateAllChecked(): this {
    if (this.data.every(item => item.checked !== true)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.data.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
    this.detectChanges();
    return this;
  }

  private notifyChange(res: boolean | SFSchemaEnum[]): void {
    if (this.ui.change) this.ui.change(res);
  }
}
