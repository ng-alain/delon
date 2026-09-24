import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, DelonFormModule, SFSchemaEnum, SFValue, getData, toBool } from '@delon/form';
import { NzCascaderModule, type NzCascaderOption, type NzCascaderTriggerType } from 'ng-zorro-antd/cascader';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import type { SFCascaderWidgetSchema } from './schema';

@Component({
  selector: 'sf-cascader',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-cascader
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [ngModel]="value"
      [ngModelOptions]="{ standalone: true }"
      (ngModelChange)="_change($event)"
      [nzOptions]="data()"
      [nzAllowClear]="ui.allowClear"
      [nzAutoFocus]="ui.autoFocus"
      [nzChangeOn]="ui.changeOn"
      [nzChangeOnSelect]="ui.changeOnSelect"
      [nzColumnClassName]="ui.columnClassName"
      [nzExpandTrigger]="ui.expandTrigger!"
      [nzMenuClassName]="ui.menuClassName"
      [nzMenuStyle]="ui.menuStyle!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzLabelProperty]="ui.labelProperty ?? 'label'"
      [nzValueProperty]="ui.valueProperty ?? 'value'"
      [nzLoadData]="loadData"
      [nzPlaceHolder]="ui.placeholder!"
      [nzPlacement]="ui.placement ?? 'bottomLeft'"
      [nzShowArrow]="showArrow"
      [nzShowInput]="showInput"
      [nzShowSearch]="ui.showSearch!"
      [nzMultiple]="ui.multiple"
      [nzTriggerAction]="triggerAction"
      [nzVariant]="ui.variant ?? 'outlined'"
      [nzSuffixIcon]="ui.suffixIcon!"
      (nzClear)="_clear()"
      (nzOpenChange)="_openChange($event)"
      (nzSelectionChange)="_selectionChange($event)"
    />
  </sf-item-wrap>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzCascaderModule]
})
export class CascaderWidget extends ControlUIWidget<SFCascaderWidgetSchema> implements OnInit {
  static readonly KEY = 'cascader';

  clearText!: string;
  showArrow!: boolean;
  showInput!: boolean;
  triggerAction: NzCascaderTriggerType[] = ['click'];
  protected readonly data = signal<SFSchemaEnum[]>([]);
  loadData?: (node: NzCascaderOption, index: number) => PromiseLike<NzSafeAny>;

  ngOnInit(): void {
    const { clearText, showArrow, showInput, triggerAction, asyncData } = this.ui;
    this.clearText = clearText ?? '清除';
    this.showArrow = toBool(showArrow, true);
    this.showInput = toBool(showInput, true);
    this.triggerAction = triggerAction ?? ['click'];
    if (asyncData) {
      // 不需要任何后处理：ng-zorro 的 cascader 在 `loadChildren()` 里已经做了全部工作：
      //   const option = node?.origin || {}      // 传给回调的就是原始选项对象
      //   wrapIntoObservable(loadFn(option, i))  // 用户写 option.children
      //     .subscribe({ next: () => { ...; this.setColumnData(nodes, i + 1) } })
      //     .pipe(finalize(() => { ...; this.$redraw.next(); }))
      // 即「读用户写的 children → 自己建下一列 → 自己触发重绘」。
      // 数据层与视图都由 ng-zorro 处理，因此不需要替换 `data`，也不需要补一次刷新。
      this.loadData = (node: NzCascaderOption, index: number) => asyncData(node, index, this);
    }
  }

  reset(value: SFValue): void {
    getData(this.schema, {}, value).subscribe(list => {
      this.data.set(list);
    });
  }

  _openChange(status: boolean): void {
    this.ui.openChange?.(status);
  }

  _change(value: NzSafeAny[] | null): void {
    this.setValue(value == null ? this.ui.clearValue : value);
    this.ui.change?.(value);
  }

  _selectionChange(options: NzCascaderOption[]): void {
    this.ui.selectionChange?.(options);
  }

  _clear(): void {
    this.ui.clear?.();
  }
}
