import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import { SFCheckboxWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-checkbox',
  template: `
    @let list = data();
    @let span = grid_span();
    <ng-template #all>
      @if (ui.checkAll) {
        <label
          nz-checkbox
          class="sf__checkbox-all mr-sm"
          [(ngModel)]="allChecked"
          [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="onAllChecked()"
          [nzIndeterminate]="indeterminate()"
        >
          {{ ui.checkAllText ?? l.checkAllText }}
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
      [title]="labelTitle()"
    >
      @if (inited()) {
        @if (list.length === 0) {
          <label
            nz-checkbox
            [nzDisabled]="disabled"
            [ngModel]="value"
            (ngModelChange)="_setValue($event)"
            [ngModelOptions]="{ standalone: true }"
          >
            {{ schema.title }}
            <span class="sf__optional">
              {{ ui.optional }}
              @if (oh) {
                <nz-icon
                  nz-tooltip
                  [nzTooltipTitle]="oh.text"
                  [nzTooltipPlacement]="oh.placement"
                  [nzTooltipTrigger]="oh.trigger"
                  [nzTooltipOverlayClassName]="oh.overlayClassName"
                  [nzTooltipOverlayStyle]="oh.overlayStyle"
                  [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                  [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                  [nzType]="oh.icon!"
                />
              }
            </span>
          </label>
        } @else {
          @if (span === 0) {
            <ng-template [ngTemplateOutlet]="all" />
            <nz-checkbox-group
              [nzDisabled]="disabled"
              [ngModel]="value"
              [ngModelOptions]="{ standalone: true }"
              [nzOptions]="$any(list)"
              (ngModelChange)="groupInGridChange($event)"
            />
          } @else {
            <nz-checkbox-group
              class="sf__checkbox-list"
              [ngModel]="value"
              (ngModelChange)="groupInGridChange($event)"
              [ngModelOptions]="{ standalone: true }"
            >
              <div nz-row>
                @if (ui.checkAll) {
                  <div nz-col [nzSpan]="span">
                    <ng-template [ngTemplateOutlet]="all" />
                  </div>
                }
                @for (i of list; track $index) {
                  <div nz-col [nzSpan]="span">
                    <label
                      nz-checkbox
                      [nzValue]="i.value"
                      [ngModel]="i.checked"
                      [ngModelOptions]="{ standalone: true }"
                      [nzDisabled]="disabled || i.disabled"
                    >
                      {{ i.label }}
                    </label>
                  </div>
                }
              </div>
            </nz-checkbox-group>
          }
        }
      }
    </sf-item-wrap>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class CheckboxWidget extends ControlUIWidget<SFCheckboxWidgetSchema> {
  protected readonly data = signal<SFSchemaEnum[]>([]);
  protected readonly allChecked = signal(false);
  protected readonly indeterminate = signal(false);
  protected readonly grid_span = signal(0);
  protected readonly labelTitle = signal('');
  protected readonly inited = signal(false);

  reset(value: SFValue): void {
    this.inited.set(false);
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data.set(list);
      this.allChecked.set(false);
      this.indeterminate.set(false);
      this.labelTitle.set(list.length === 0 ? '' : (this.schema.title as string));
      const { span } = this.ui;
      this.grid_span.set(span && span > 0 ? span : 0);

      this.updateAllChecked();
      this.inited.set(true);
    });
  }

  _setValue(value: SFValue): void {
    this.setValue(value);
    this.notifyChange(value);
  }

  notifySet(): void {
    const checkList = this.data().filter(w => w.checked);
    this.updateAllChecked().setValue(checkList.map(item => item.value));
    this.notifyChange(checkList);
  }

  groupInGridChange(values: SFValue[]): void {
    this.data().forEach(item => (item.checked = values.indexOf(item.value) !== -1));
    this.bumpData();
    this.notifySet();
  }

  onAllChecked(): void {
    this.data().forEach(item => (item.checked = this.allChecked()));
    this.bumpData();
    this.notifySet();
  }

  updateAllChecked(): this {
    if (this.data().every(item => item.checked !== true)) {
      this.allChecked.set(false);
      this.indeterminate.set(false);
    } else if (this.data().every(item => item.checked === true)) {
      this.allChecked.set(true);
      this.indeterminate.set(false);
    } else {
      this.indeterminate.set(true);
    }
    return this;
  }

  /** 元素级 `item.checked` 是就地修改的，用数组身份替换让 OnPush 视图刷新 */
  private bumpData(): void {
    this.data.set([...this.data()]);
  }

  private notifyChange(res: boolean | SFSchemaEnum[]): void {
    this.ui.change?.(res);
  }
}
