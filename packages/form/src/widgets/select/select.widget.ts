import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';

import { ArrayService } from '@delon/util/array';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { SFSelectWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { SFItemWrapComponent } from '../../sf-item-wrap.component';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-select',
  template: `
    @let list = data();
    @let isLoading = loading();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-select
        [nzId]="id"
        [nzDisabled]="disabled"
        [(ngModel)]="_value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="change($event)"
        [nzSize]="ui.size!"
        [nzPlaceHolder]="ui.placeholder!"
        [nzNotFoundContent]="ui.notFoundContent"
        [nzDropdownClassName]="ui.dropdownClassName!"
        [nzAllowClear]="ui.allowClear"
        [nzDropdownStyle]="ui.dropdownStyle!"
        [nzCustomTemplate]="ui.customTemplate!"
        [nzSuffixIcon]="ui.suffixIcon!"
        [nzRemoveIcon]="ui.removeIcon!"
        [nzClearIcon]="ui.clearIcon!"
        [nzMenuItemSelectedIcon]="ui.menuItemSelectedIcon!"
        [nzMaxTagPlaceholder]="ui.maxTagPlaceholder!"
        [nzDropdownRender]="ui.dropdownRender!"
        [nzAutoClearSearchValue]="i.autoClearSearchValue"
        [nzVariant]="ui.variant ?? 'outlined'"
        [nzAutoFocus]="i.autoFocus"
        [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth!"
        [nzServerSearch]="i.serverSearch"
        [nzMaxMultipleCount]="i.maxMultipleCount!"
        [nzMode]="i.mode!"
        [nzShowSearch]="i.showSearch"
        [nzShowArrow]="i.showArrow!"
        [nzTokenSeparators]="i.tokenSeparators!"
        [nzMaxTagCount]="i.maxTagCount!"
        [compareWith]="i.compareWith!"
        [nzOptionHeightPx]="i.optionHeightPx!"
        [nzOptionOverflowSize]="i.optionOverflowSize!"
        (nzOpenChange)="openChange($event)"
        (nzOnSearch)="onSearch($event)"
        (nzScrollToBottom)="scrollToBottom()"
      >
        @if (!isLoading && !hasGroup()) {
          @for (o of list; track $index) {
            <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzHide]="o.hide" [nzDisabled]="o.disabled" />
          }
        }
        @if (!isLoading && hasGroup()) {
          @for (group of list; track $index) {
            <nz-option-group [nzLabel]="group.label">
              @for (o of group.children; track $index) {
                <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzDisabled]="o.disabled" [nzHide]="o.hide" />
              }
            </nz-option-group>
          }
        }
        @if (isLoading) {
          <nz-option nzDisabled nzCustomContent>
            <nz-icon nzType="loading" />
            {{ ui.searchLoadingText }}
          </nz-option>
        }
      </nz-select>
    </sf-item-wrap>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, NzIconModule, NzSelectModule, SFItemWrapComponent]
})
export class SelectWidget extends ControlUIWidget<SFSelectWidgetSchema> implements OnInit {
  private search$ = new Subject<string>();
  i!: SFSelectWidgetSchema;
  protected readonly data = signal<SFSchemaEnum[]>([]);
  protected readonly _value = signal<NzSafeAny>(undefined);
  protected readonly loading = signal(false);
  /** 模板读取，且在异步 `checkGroup()` 中写入，必须是 signal 才能保证 OnPush 刷新 */
  protected readonly hasGroup = signal(false);

  private checkGroup(list: SFSchemaEnum[]): void {
    this.hasGroup.set((list ?? []).filter(w => w.group === true).length > 0);
  }

  ngOnInit(): void {
    const {
      autoClearSearchValue,
      autoFocus,
      dropdownMatchSelectWidth,
      serverSearch,
      maxMultipleCount,
      mode,
      showSearch,
      tokenSeparators,
      maxTagCount,
      compareWith,
      optionHeightPx,
      optionOverflowSize,
      showArrow
    } = this.ui;
    this.i = {
      autoClearSearchValue: toBool(autoClearSearchValue, true),
      autoFocus: toBool(autoFocus, false),
      dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
      serverSearch: toBool(serverSearch, false),
      maxMultipleCount: maxMultipleCount ?? Infinity,
      mode: mode ?? 'default',
      showSearch: toBool(showSearch, true),
      tokenSeparators: tokenSeparators ?? [],
      maxTagCount: maxTagCount ?? Infinity,
      optionHeightPx: optionHeightPx ?? 32,
      optionOverflowSize: optionOverflowSize ?? 8,
      showArrow: toBool(showArrow, true),
      compareWith: compareWith ?? ((o1: NzSafeAny, o2: NzSafeAny) => o1 === o2)
    };

    const onSearch = this.ui.onSearch!;
    if (onSearch) {
      // 订阅随 `sf-item` 销毁结束：widget 会随 `ui.widget` 变化重建，旧搜索不能再写回
      // `catchError(() => [])` 必须留在管道内，否则一次失败会终止整条订阅、后续搜索全部失效
      this.search$
        .pipe(
          takeUntil(this.sfItemComp.destroy$),
          distinctUntilChanged(),
          debounceTime(this.ui.searchDebounceTime ?? 300),
          switchMap(text => onSearch(text)),
          catchError(() => [])
        )
        .subscribe(list => {
          this.data.set(list);
          this.checkGroup(list);
          this.loading.set(false);
        });
    }
  }

  reset(value: SFValue): void {
    const onSearch = this.ui.onSearch!;
    getData(this.schema, this.ui, value).subscribe(list => {
      this._value.set(value);
      if (onSearch == null) this.data.set(list);
      this.checkGroup(list);
    });
    if (value && onSearch != null) this.search$.next(value);
  }

  change(values: SFValue): void {
    this.ui.change?.(values, this.getOrgData(values));
    this.setValue(values == null ? this.ui.clearValue : values);
  }

  private getOrgData(values: SFValue): SFSchemaEnum | SFSchemaEnum[] {
    const srv = this.injector.get(ArrayService);
    if (!Array.isArray(values)) {
      return srv.findTree(this.data(), (item: SFSchemaEnum) => item.value === values)!;
    }
    return values.map(value => srv.findTree(this.data(), (item: SFSchemaEnum) => item.value === value));
  }

  openChange(status: boolean): void {
    this.ui.openChange?.(status);
  }

  scrollToBottom(): void {
    this.ui.scrollToBottom?.();
  }

  onSearch(value: string): void {
    if (this.ui.onSearch) {
      this.loading.set(true);
      this.search$.next(value);
    }
  }
}
