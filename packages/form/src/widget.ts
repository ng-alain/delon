import { AfterViewInit, ChangeDetectorRef, DestroyRef, Directive, Injector, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';

import { LocaleData } from '@delon/theme';
import type { NgClassType, NzSafeAny } from 'ng-zorro-antd/core/types';

import type { ErrorData } from './errors';
import type { SFValue } from './interface';
import { ArrayProperty } from './model/array.property';
import { FormProperty } from './model/form.property';
import { ObjectProperty } from './model/object.property';
import type { SFSchema } from './schema';
import type { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';
import type { SFArrayWidgetSchema, SFObjectWidgetSchema } from './widgets';

@Directive({
  host: { '[class]': 'cls' }
})
export abstract class Widget<T extends FormProperty, UIT extends SFUISchemaItem> implements AfterViewInit {
  /**
   * 仅内部使用：在 `ngAfterViewInit` 的错误推送里强制刷新一次 widget 视图，
   * 使 `[ngModel]` 的 model→view 写入（`writeValue`）落在同一个 tick 内。
   *
   * widget 的状态本身都会自行标脏——`ui`/`schema` 是响应式代理，局部字段与
   * `showError`/`error` 是 signal——所以这是唯一需要手动刷新的一处。
   */
  private readonly cdr = inject(ChangeDetectorRef);
  /** 错误订阅随 widget 自身销毁而结束：`ui.widget` 变化会让 `sf-item` 重建 widget */
  private readonly destroyRef = inject(DestroyRef);
  readonly injector = inject(Injector);
  readonly sfItemComp = inject(SFItemComponent);
  readonly sfComp = inject(SFComponent);

  // #region 响应式状态
  //
  // 以下成员由 `SFItemComponent.onWidgetInstanciated` 赋值，并被 widget 模板直接读取。
  // 采用「同名 getter/setter + signal 内核」，因此既有模板写法（如 `[showError]="showError"`）
  // 仍然有效，同时在模板或 `computed` 中读取时会自动建立依赖。

  private readonly _formProperty$ = signal<T | null>(null);
  private readonly _schema$ = signal<SFSchema | null>(null);
  private readonly _ui$ = signal<UIT | null>(null);
  private readonly _id$ = signal('');
  private readonly _error$ = signal<string | undefined>(undefined);
  private readonly _showError$ = signal(false);

  get formProperty(): T {
    return this._formProperty$()!;
  }
  set formProperty(value: T) {
    this._formProperty$.set(value);
  }

  get schema(): SFSchema {
    return this._schema$()!;
  }
  set schema(value: SFSchema) {
    this._schema$.set(value);
  }

  get ui(): UIT {
    return this._ui$()!;
  }
  set ui(value: UIT) {
    this._ui$.set(value);
  }

  get id(): string {
    return this._id$();
  }
  set id(value: string) {
    this._id$.set(value);
  }

  get error(): string | undefined {
    return this._error$();
  }
  set error(value: string | undefined) {
    this._error$.set(value);
  }

  get showError(): boolean {
    return this._showError$();
  }
  set showError(value: boolean) {
    this._showError$.set(value);
  }
  // #endregion

  get cls(): NgClassType {
    return this.ui.class ?? '';
  }

  get disabled(): boolean {
    if (this.schema.readOnly === true || this.sfComp!.disabled()) {
      return true;
    }

    return false;
  }

  get l(): LocaleData {
    return this.formProperty.root.widget!.sfComp!.locale;
  }

  get oh(): SFOptionalHelp {
    return this.ui.optionalHelp as SFOptionalHelp;
  }

  get dom(): DomSanitizer {
    return this.injector.get(DomSanitizer);
  }

  get cleanValue(): boolean {
    return this.sfComp!.cleanValue();
  }

  /**
   * 是否显示错误：数组/对象这类布局 widget 为 `false`
   *
   * 它们的 `errorsChanges` 携带的是**子节点的聚合错误**，显示出来会和子字段行内的报错重复；
   * 子节点的错误由它们各自的 widget 显示。
   */
  protected readonly displayError: boolean = true;

  ngAfterViewInit(): void {
    if (this.displayError) {
      this.formProperty.errorsChanges
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((errors: ErrorData[] | null) => {
          if (errors == null) return;

          di(this.ui, 'errorsChanges', this.formProperty.path, errors);

          // 不显示首次校验视觉
          const firstVisual = this.sfComp?.firstVisual();
          // 门控用 `_rendered`（首次渲染完成），不能用 `_inited`：widget 对 `errorsChanges`
          // 是「订阅即回放」，订阅时 `_inited` 已为真，抑制会失效
          if (firstVisual || (!firstVisual && this.sfComp?._rendered)) {
            this.showError = errors.length > 0;
            this.error = this.showError ? (errors[0].message as string) : '';

            // 强制刷新 widget 自身视图：`[ngModel]` 的 model→view 写入（`writeValue`）
            // 必须在同一个 tick 内完成，否则输入框拿不到初值。
            // 与 `showError`/`error` 无关——它们由 signal 自行驱动。
            this.cdr.detectChanges();
          }
        });
    }

    this.afterViewInit();

    // 初始值推送：`refreshSchema()` 的 `reset()` 跑在首次 CD 之前，那时 widget 还没创建，
    // `AtomicProperty.resetValue` 的 `if (this.widget)` 分支被跳过，所以这里补一次。
    //
    // 必须放在 `afterViewInit()` 之后：
    //  - 更早（在 `sf-item` 创建组件处）会早于 widget 的 `ngOnInit`：`DateWidget` 依赖
    //    `ngOnInit` 里解析的 format，会抛 `TypeError: value.map is not a function`；
    //  - 早于 `afterViewInit()`：`AutoCompleteWidget` 的 `isAsync`/`list` 尚未就绪，
    //    `reset()` 会走错分支（`typing` 拿到原值而不是 label）。
    // 这一次推送的是初值，不算用户变更
    this.sfComp._runSilently(() => this.reset(this.formProperty.value));
  }

  setValue(value: SFValue): void {
    this.formProperty.setValue(value, false);
    di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
  }

  get value(): NzSafeAny {
    return this.formProperty.value;
  }

  abstract reset(value: SFValue): void;

  abstract afterViewInit(): void;
}

@Directive()
export class ControlWidget extends Widget<FormProperty, SFUISchemaItem> {
  reset(_value: SFValue): void {}
  afterViewInit(): void {}
}

@Directive()
export class ControlUIWidget<UIT extends SFUISchemaItem> extends Widget<FormProperty, UIT> {
  reset(_value: SFValue): void {}
  afterViewInit(): void {}
}

@Directive()
export class ArrayLayoutWidget extends Widget<ArrayProperty, SFArrayWidgetSchema> {
  protected readonly displayError = false;
  reset(_value: SFValue): void {}
  afterViewInit(): void {}
}

@Directive()
export class ObjectLayoutWidget extends Widget<ObjectProperty, SFObjectWidgetSchema> {
  protected readonly displayError = false;
  reset(_value: SFValue): void {}
  afterViewInit(): void {}
}
