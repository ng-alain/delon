import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, DelonFormModule, SFSchemaEnum, SFValue, getData } from '@delon/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

import type { SFTagWidgetSchema } from './schema';

@Component({
  selector: 'sf-tag',
  template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <ng-template #icon let-i>
        <nz-icon
          [nzType]="i.type"
          [nzTheme]="i.theme"
          [nzTwotoneColor]="i.twotoneColor"
          [nzRotate]="i.rotate"
          [nzIconfont]="i.iconfont"
          [nzSpin]="i.spin"
        />
      </ng-template>
      @for (i of data(); track $index) {
        <nz-tag
          [nzMode]="ui.mode ?? 'checkable'"
          [nzChecked]="i.checked"
          (nzOnClose)="_close($event)"
          (nzCheckedChange)="onChange(i)"
        >
          @if (i.prefixIcon) {
            <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.prefixIcon }" />
          }
          <span>{{ i.label }}</span>
          @if (i.suffixIcon) {
            <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.suffixIcon }" />
          }
        </nz-tag>
      }
    </sf-item-wrap>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, NgTemplateOutlet, DelonFormModule, NzTagModule, NzIconModule]
})
export class TagWidget extends ControlUIWidget<SFTagWidgetSchema> {
  static readonly KEY = 'tag';

  protected readonly data = signal<SFSchemaEnum[]>([]);

  reset(value: SFValue): void {
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data.set(list);
    });
  }

  onChange(item: SFSchemaEnum): void {
    item.checked = !item.checked;
    // 元素级就地 mutate 无法被浅 signal 观测，用数组身份替换驱动刷新
    this.data.set([...this.data()]);
    this.updateValue();
    this.ui.checkedChange?.(item.checked);
  }

  _close(e: MouseEvent): void {
    this.ui.onClose?.(e);
  }

  private updateValue(): void {
    this.formProperty.setValue(
      this.data()
        .filter(w => w.checked)
        .map(i => i.value),
      false
    );
  }
}
