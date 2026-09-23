import { afterNextRender, computed, Injector, signal } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, distinctUntilChanged, map } from 'rxjs';

import { DelonLocaleService } from '@delon/theme';
import { AlainSFConfig } from '@delon/util/config';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { NzFormControlStatusType } from 'ng-zorro-antd/form';

import { SF_SEQ } from '../const';
import type { ErrorData } from '../errors';
import type { SFFormValueChange, SFUpdateValueAndValidity, SFValue } from '../interface';
import { reactive } from '../reactive';
import type { SFSchema, SFSchemaType } from '../schema';
import type { SFUISchema, SFUISchemaItem, SFUISchemaItemRun, SFVisibleIfReturn } from '../schema/ui';
import { isBlank } from '../utils';
import { SchemaValidatorFactory } from '../validator.factory';
import type { Widget } from '../widget';

export abstract class FormProperty {
  private readonly _valueChanges = new BehaviorSubject<SFFormValueChange>({ path: null, pathValue: null, value: null });
  private readonly _errorsChanges = new BehaviorSubject<ErrorData[] | null>(null);
  private readonly _visibilityChanges = new BehaviorSubject<boolean>(true);
  private _root: PropertyGroup;
  private _parent: PropertyGroup | null;
  /**
   * @internal 直接子节点上报的错误（key 是子属性**实例**）
   *
   * 子节点的 `path` 会随数组增删被重编号，重编号后就无法再指回原来的节点，
   * 因此这里用实例当 key。
   */
  protected readonly _objErrors = new Map<FormProperty, ErrorData[]>();
  /**
   * @internal `SFComponent.cleanValue` 在属性树上的镜像
   *
   * 供模型层读取（如 `ArrayProperty._updateValue` 合并 `formData` 时）。
   * **不要经由 `widget` 读取**——`reset()` 发生在 widget 创建之前，
   * 那时 `this.widget` 还是 undefined。
   */
  _cleanValue = false;
  schemaValidator: (value: SFValue) => ErrorData[];
  schema: SFSchema;
  ui: SFUISchema | SFUISchemaItemRun;
  formData: Record<string, unknown>;
  widget!: Widget<FormProperty, SFUISchemaItem>;
  path: string;
  propertyId?: string;

  // #region 响应式状态
  //
  // `_value` / `_errors` / `_visible` 的唯一存储是 signal。对外暴露同名的
  // getter（`value` / `errors` / `visible` / `valid`），因此在模板或 `computed` 中
  // 读取时会**自动建立依赖**，而读法本身与普通字段无异。
  // 写入一律保持同步（不引入 effect），以免改变事件时序。

  /** @internal 值的唯一存储 */
  private readonly _value$ = signal<SFValue>(null);
  /** @internal 错误的唯一存储 */
  private readonly _errors$ = signal<ErrorData[] | null>(null);
  /** @internal 可见性的唯一存储 */
  private readonly _visible$ = signal(true);
  private readonly _valid$ = computed(() => {
    const errors = this._errors$();
    return errors === null || errors.length === 0;
  });

  /**
   * @internal 值的兼容读写通道
   *
   * 子类会直接写 `this._value = x`，`widgets/upload` 这类 widget 也会写
   * `formProperty._value`，因此保留它并与 `_value$` 读写同一份存储。
   * 内部新代码请优先使用 `_value$`。
   */
  get _value(): SFValue {
    return this._value$();
  }
  set _value(value: SFValue) {
    this._value$.set(value);
  }
  // #endregion

  constructor(
    private injector: Injector,
    schemaValidatorFactory: SchemaValidatorFactory,
    schema: SFSchema,
    ui: SFUISchema | SFUISchemaItem,
    formData: Record<string, unknown>,
    parent: PropertyGroup | null,
    path: string,
    private _options: AlainSFConfig
  ) {
    // 浅响应式包装：让 `property.ui.xxx = yyy` / `property.schema.enum = [...]` 之类的
    // 就地赋值也能进入 signal 依赖图。`schemaValidator` 用原始 `schema`，避免把代理交给 ajv。
    this.schema = reactive(schema);
    this.ui = reactive(ui);
    this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
      ingoreKeywords: this.ui.ingoreKeywords as string[],
      debug: (ui as SFUISchemaItem)!.debug!
    });
    this.formData = formData ?? schema.default;
    this._parent = parent;
    if (parent) {
      this._root = parent.root;
    } else {
      this._root = this as NzSafeAny;
    }
    this.path = path;
  }

  get valueChanges(): BehaviorSubject<SFFormValueChange> {
    return this._valueChanges;
  }

  get errorsChanges(): BehaviorSubject<ErrorData[] | null> {
    return this._errorsChanges;
  }

  get type(): SFSchemaType {
    return this.schema.type!;
  }

  get parent(): PropertyGroup | null {
    return this._parent;
  }

  get root(): PropertyGroup {
    return this._root;
  }

  /** 表单值（读取时若处于响应式上下文则建立依赖） */
  get value(): SFValue {
    return this._value$();
  }

  /** 当前错误列表 */
  get errors(): ErrorData[] | null {
    return this._errors$();
  }

  /** 是否可见 */
  get visible(): boolean {
    return this._visible$();
  }

  /** 是否有效 */
  get valid(): boolean {
    return this._valid$();
  }

  get options(): AlainSFConfig {
    return this._options;
  }

  /**
   * 设置值
   *
   * @param onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
   */
  abstract setValue(value: SFValue, onlySelf: boolean): void;

  /**
   * 重置值，默认值为 `schema.default`
   *
   * @param onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
   */
  abstract resetValue(value: SFValue, onlySelf: boolean): void;

  /**
   * @internal
   */
  abstract _hasValue(): boolean;

  /**
   *  @internal
   */
  abstract _updateValue(): void;

  /**
   * 更新值且校验数据
   */
  updateValueAndValidity(options?: SFUpdateValueAndValidity): void {
    options = {
      onlySelf: false,
      emitValidator: true,
      emitValueEvent: true,
      updateValue: null,
      ...options
    };
    this._updateValue();

    if (options.emitValueEvent) {
      options.updatePath = options.updatePath ?? this.path ?? '';

      this.valueChanges.next({ value: this.value, path: options.updatePath, pathValue: options.updateValue });

      options.updateValue = options.updateValue == null ? this.value : options.updateValue;
    }

    // `emitValidator` 每一次数据变更已经包含完整错误链路，后续父节点数据变更无须再触发校验
    if (options.emitValidator && this.ui.liveValidate === true) {
      this._runValidation();
    }

    if (this.parent && !options.onlySelf) {
      this.parent.updateValueAndValidity({ ...options, emitValidator: false });
    }
  }

  /** 根据路径搜索表单属性 */
  searchProperty(path: string): FormProperty | null {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let prop: FormProperty = this;
    let base: PropertyGroup;

    let result = null;
    if (path[0] === SF_SEQ) {
      base = this.findRoot();
      result = base.getProperty(path.substring(1));
    } else {
      while (result === null && prop.parent !== null) {
        prop = base = prop.parent;
        result = base.getProperty(path);
      }
    }
    return result!;
  }

  /** 查找根表单属性 */
  findRoot(): PropertyGroup {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let property: FormProperty = this;
    while (property.parent !== null) {
      property = property.parent;
    }
    return property as PropertyGroup;
  }

  // #region process errors

  private isEmptyData(value: Record<string, unknown>): boolean {
    if (isBlank(value)) return true;
    switch (this.type) {
      case 'string':
        return `${value}`.length === 0;
    }
    return false;
  }

  /**
   * @internal
   */
  _runValidation(): void {
    let errors: ErrorData[];
    // The definition of some rules:
    // 1. Should not ajv validator when is empty data and required fields
    // 2. Should not ajv validator when is empty data
    const isEmpty = this.isEmptyData(this._value$());
    if (isEmpty && this.ui._required) {
      errors = [{ keyword: 'required' }];
    } else if (isEmpty) {
      errors = [];
    } else {
      errors = this.schemaValidator(this._value$()) ?? [];
    }
    const customValidator = (this.ui as SFUISchemaItemRun).validator;
    if (typeof customValidator === 'function') {
      const customErrors = customValidator(this.value, this, this.findRoot());
      if (customErrors instanceof Observable) {
        customErrors.subscribe(res => {
          this.setCustomErrors(errors, res);
        });
        return;
      }
      this.setCustomErrors(errors, customErrors);
      return;
    }

    this._errors$.set(errors);
    this.setErrors(errors);
  }

  private setCustomErrors(errors: ErrorData[], list: ErrorData[]): void {
    const hasCustomError = Array.isArray(list) && list.length > 0;
    if (hasCustomError) {
      list.forEach(err => {
        if (!err.message) {
          throw new Error(`The custom validator must contain a 'message' attribute to viewed error text`);
        }
        err.keyword = null;
      });
    }
    const nextErrors = hasCustomError ? errors.concat(...list) : errors;
    this._errors$.set(nextErrors);
    this.setErrors(nextErrors);
  }

  /**
   * Set the current error message
   *
   * 设置当前错误消息
   *
   * @param emitFormat 若提供的消息带有 `{xx}` 会自动根据参数进行转化，包含自定义函数
   *
   * @example
   *
   * this.sf.getProperty('/name')?.setErrors({ keyword: 'required' });
   * this.sf.getProperty('/name')?.setErrors({ message: 'Please input your username!' });
   * this.sf.getProperty('/name')?.setErrors(); // Clean error
   */
  setErrors(errors: ErrorData | ErrorData[] = [], emitFormat: boolean = true): void {
    let arrErrs = Array.isArray(errors) ? errors : [errors];

    if (emitFormat && arrErrs && !this.ui.onlyVisual) {
      const l = this._localeError();
      arrErrs = arrErrs.map((err: ErrorData) => {
        let message: string | ((err: ErrorData) => string) =
          err.keyword == null && err.message
            ? err.message
            : ((this.ui.errors ?? {})[err.keyword!] ?? this._options.errors![err.keyword!] ?? l[err.keyword!] ?? ``);

        if (message && typeof message === 'function') {
          message = message(err);
        }

        if (message) {
          if (~message.indexOf('{') && err.params) {
            message = message.replace(/{([.a-zA-Z0-9]+)}/g, (_v: string, key: string) => err.params![key] ?? '');
          }
          err.message = message;
        }
        return err;
      });
    }
    this._errors$.set(arrErrs);
    this._errorsChanges.next(arrErrs);
    // Should send errors to parent field
    // 自身错误为空时改为上报子树：手写 `setErrors`、必填空串、自定义校验器这类错误
    // 本节点自己校验不出来，不能因为自身为空就把子树的上报一起清掉
    this._parent?.setParentAndPlatErrors(arrErrs.length ? arrErrs : this._collectChildErrors(), this);
  }

  /**
   * 错误文案的本地化映射
   *
   * widget 已实例化时取它的 `l`；**widget 尚未实例化时回落到 `DelonLocaleService`**，
   * 因此 `setErrors()` 不依赖 widget 是否已存在。
   */
  private _localeError(): Record<string, string | ((err: ErrorData) => string)> {
    if (this.widget) {
      return (this.widget.l.error ?? {}) as Record<string, string>;
    }
    const srv = this.injector.get(DelonLocaleService, null);
    return (srv?.getData('sf')?.error ?? {}) as Record<string, string>;
  }

  /**
   * @internal 记录某个子节点上报的错误，并据此重新聚合本节点的错误
   */
  setParentAndPlatErrors(errors: ErrorData[], property: FormProperty): void {
    this._objErrors.set(property, errors);
    this._refreshObjErrors();
  }

  /**
   * @internal 用可见子节点上报的错误重新聚合本节点，通知订阅者并向上传递
   */
  protected _refreshObjErrors(): void {
    const errors = this._collectChildErrors();
    this._errors$.set(errors);
    this._errorsChanges.next(errors);
    this._parent?.setParentAndPlatErrors(errors, this);
  }

  private _collectChildErrors(): ErrorData[] {
    const errors: ErrorData[] = [];
    this._objErrors.forEach((childErrors, property) => {
      if (!property.visible) return;
      errors.push(...childErrors);
    });
    return errors;
  }

  // #endregion

  // #region condition

  /**
   * Set the hide or display of widget
   * 设置小部件的隐藏或显示
   */
  setVisible(visible: boolean): this {
    this._visible$.set(visible);
    this._visibilityChanges.next(visible);
    // 渲染时需要重新触发 reset
    //
    // `afterNextRender` 在 zone 与 zoneless 两种模式下都表示「下一次渲染之后」，
    // 不需要探测 `ɵNoopNgZone` 这类私有 API。
    if (visible) {
      afterNextRender(
        () => {
          this.resetValue(this.value, true);
        },
        { injector: this.injector }
      );
    }
    return this;
  }

  _bindVisibility(): void {
    const visibleIf = (this.ui as SFUISchemaItem).visibleIf;
    if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
      this.setVisible(false);
    } else if (visibleIf != null) {
      const propertiesBinding: Array<Observable<boolean>> = [];
      for (const dependencyPath in visibleIf) {
        if (Object.prototype.hasOwnProperty.call(visibleIf, dependencyPath)) {
          const property = this.searchProperty(dependencyPath);
          if (property) {
            const valueCheck = property.valueChanges.pipe(
              map(res => {
                const vi = visibleIf[dependencyPath];
                if (typeof vi === 'function') {
                  const viFnRes = vi(res.value, property);
                  // 同步更新 required
                  if (typeof viFnRes === 'object') {
                    const fixViFnRes = { show: false, required: false, ...viFnRes } as SFVisibleIfReturn;
                    const parentRequired = this.parent?.schema.required;
                    if (parentRequired && this.propertyId) {
                      const idx = parentRequired.findIndex(w => w === this.propertyId);
                      if (fixViFnRes.required) {
                        if (idx === -1) parentRequired.push(this.propertyId);
                      } else {
                        if (idx !== -1) parentRequired.splice(idx, 1);
                      }
                      // 与 `SFComponent.setRequired()` 同理：必须写入新数组，代理才会通知读取方
                      this.parent!.schema.required = [...parentRequired];
                      this.ui._required = fixViFnRes.required;
                    }
                    return fixViFnRes.show;
                  }
                  return viFnRes;
                }
                if (vi.indexOf('$ANY$') !== -1) {
                  return res.value && res.value.length > 0;
                } else {
                  return vi.indexOf(res.value) !== -1;
                }
              })
            );
            const visibilityCheck = property._visibilityChanges;
            const and = combineLatest([valueCheck, visibilityCheck]).pipe(map(results => results[0] && results[1]));
            propertiesBinding.push(and);
          } else {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              console.warn(`Can't find property ${dependencyPath} for visibility check of ${this.path}`);
            }
          }
        }
      }

      combineLatest(propertiesBinding)
        .pipe(
          map(values => (this.ui.visibleIfLogical === 'and' ? values.every(v => v) : values.some(v => v))),
          distinctUntilChanged()
        )
        .subscribe(visible => this.setVisible(visible));
    }
  }

  // #endregion

  updateFeedback(status: NzFormControlStatusType = ''): void {
    this.ui.feedback = status;
    this.widget?.injector.get(NzFormStatusService).formStatusChanges.next({ status, hasFeedback: !!status });
  }
}

export abstract class PropertyGroup extends FormProperty {
  // `properties` 被 `array.widget.ts` 的模板直接读取（`@for (... of formProperty.properties)`），
  // 用 signal 支撑 + 同名 getter/setter，数组增删后视图自动刷新。
  // 写入**只能整值替换**：就地 push/splice 不会触发通知。
  private readonly _properties$ = signal<Record<string, FormProperty> | FormProperty[] | null>(null);
  get properties(): Record<string, FormProperty> | FormProperty[] | null {
    return this._properties$();
  }
  set properties(value: Record<string, FormProperty> | FormProperty[] | null) {
    this._properties$.set(value);
  }

  getProperty(path: string): FormProperty | undefined {
    const subPathIdx = path.indexOf(SF_SEQ);
    const propertyId = subPathIdx !== -1 ? path.substring(0, subPathIdx) : path;

    let property = (this.properties as Record<string, FormProperty>)[propertyId];
    if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
      const subPath = path.substring(subPathIdx + 1);
      property = (property as PropertyGroup).getProperty(subPath)!;
    }
    return property;
  }

  forEachChild(fn: (formProperty: FormProperty, str: string) => void): void {
    // eslint-disable-next-line @typescript-eslint/no-for-in-array
    for (const propertyId in this.properties) {
      if (Object.prototype.hasOwnProperty.call(this.properties, propertyId)) {
        const property = (this.properties as Record<string, FormProperty>)[propertyId];
        fn(property, propertyId);
      }
    }
  }

  forEachChildRecursive(fn: (formProperty: FormProperty) => void): void {
    this.forEachChild(child => {
      fn(child);
      if (child instanceof PropertyGroup) {
        (child as PropertyGroup).forEachChildRecursive(fn);
      }
    });
  }

  _bindVisibility(): void {
    super._bindVisibility();
    this._bindVisibilityRecursive();
  }

  private _bindVisibilityRecursive(): void {
    this.forEachChildRecursive(property => {
      property._bindVisibility();
    });
  }

  isRoot(): boolean {
    return this === this.root;
  }
}
