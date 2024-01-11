import { Injector, NgZone } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, distinctUntilChanged, map, take } from 'rxjs';

import { AlainSFConfig } from '@delon/util/config';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { NzFormControlStatusType } from 'ng-zorro-antd/form';

import { SF_SEQ } from '../const';
import type { ErrorData } from '../errors';
import type { SFFormValueChange, SFUpdateValueAndValidity, SFValue } from '../interface';
import type { SFSchema, SFSchemaType } from '../schema';
import type { SFUISchema, SFUISchemaItem, SFUISchemaItemRun, SFVisibleIfReturn } from '../schema/ui';
import { isBlank } from '../utils';
import { SchemaValidatorFactory } from '../validator.factory';
import type { Widget } from '../widget';

export abstract class FormProperty {
  private _errors: ErrorData[] | null = null;
  private _valueChanges = new BehaviorSubject<SFFormValueChange>({ path: null, pathValue: null, value: null });
  private _errorsChanges = new BehaviorSubject<ErrorData[] | null>(null);
  private _visible = true;
  private _visibilityChanges = new BehaviorSubject<boolean>(true);
  private _root: PropertyGroup;
  private _parent: PropertyGroup | null;
  _objErrors: { [key: string]: ErrorData[] } = {};
  schemaValidator: (value: SFValue) => ErrorData[];
  schema: SFSchema;
  ui: SFUISchema | SFUISchemaItemRun;
  formData: Record<string, unknown>;
  _value: SFValue = null;
  widget!: Widget<FormProperty, SFUISchemaItem>;
  path: string;
  propertyId?: string;

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
    this.schema = schema;
    this.ui = ui;
    this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
      ingoreKeywords: this.ui.ingoreKeywords as string[],
      debug: (ui as SFUISchemaItem)!.debug!
    });
    this.formData = formData || schema.default;
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

  get value(): SFValue {
    return this._value;
  }

  get errors(): ErrorData[] | null {
    return this._errors;
  }

  get visible(): boolean {
    return this._visible;
  }

  get valid(): boolean {
    return this._errors === null || this._errors.length === 0;
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

  cd(onlySelf: boolean = false): void {
    this.widget?.detectChanges(onlySelf);
  }

  /**
   * 更新值且校验数据
   */
  updateValueAndValidity(options?: SFUpdateValueAndValidity): void {
    options = {
      onlySelf: false,
      emitValidator: true,
      emitValueEvent: true,
      updatePath: '',
      updateValue: null,
      ...options
    };
    this._updateValue();

    if (options.emitValueEvent) {
      options.updatePath = options.updatePath || this.path;
      options.updateValue = options.updateValue == null ? this.value : options.updateValue;
      this.valueChanges.next({ value: this.value, path: options.updatePath, pathValue: options.updateValue });
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
    let base: PropertyGroup | null = null;

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
    const isEmpty = this.isEmptyData(this._value);
    if (isEmpty && this.ui._required) {
      errors = [{ keyword: 'required' }];
    } else if (isEmpty) {
      errors = [];
    } else {
      errors = this.schemaValidator(this._value) || [];
    }
    const customValidator = (this.ui as SFUISchemaItemRun).validator;
    if (typeof customValidator === 'function') {
      const customErrors = customValidator(this.value, this, this.findRoot());
      if (customErrors instanceof Observable) {
        customErrors.subscribe(res => {
          this.setCustomErrors(errors, res);
          this.cd(false);
        });
        return;
      }
      this.setCustomErrors(errors, customErrors);
      return;
    }

    this._errors = errors;
    this.setErrors(this._errors);
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
    this._errors = hasCustomError ? errors.concat(...list) : errors;
    this.setErrors(this._errors);
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
      const l = (this.widget && this.widget.l.error) || {};
      arrErrs = arrErrs.map((err: ErrorData) => {
        let message: string | ((err: ErrorData) => string) =
          err.keyword == null && err.message
            ? err.message
            : (this.ui.errors || {})[err.keyword!] || this._options.errors![err.keyword!] || l[err.keyword!] || ``;

        if (message && typeof message === 'function') {
          message = message(err);
        }

        if (message) {
          if (~message.indexOf('{') && err.params) {
            message = message.replace(/{([\.a-zA-Z0-9]+)}/g, (_v: string, key: string) => err.params![key] || '');
          }
          err.message = message;
        }
        return err;
      });
    }
    this._errors = arrErrs;
    this._errorsChanges.next(arrErrs);
    // Should send errors to parent field
    if (this._parent) {
      this._parent.setParentAndPlatErrors(arrErrs, this.path);
    }
  }

  setParentAndPlatErrors(errors: ErrorData[], path: string): void {
    this._objErrors[path] = errors;
    const platErrors: ErrorData[] = [];
    Object.keys(this._objErrors).forEach(p => {
      const property = this.searchProperty(p);
      if (property && !property.visible) return;
      platErrors.push(...this._objErrors[p]);
    });
    this.setErrors(platErrors, false);
  }

  // #endregion

  // #region condition

  /**
   * Set the hide or display of widget
   * 设置小部件的隐藏或显示
   */
  setVisible(visible: boolean): this {
    this._visible = visible;
    this._visibilityChanges.next(visible);
    // 渲染时需要重新触发 reset
    if (visible) {
      this.injector
        .get(NgZone)
        .onStable.pipe(take(1))
        .subscribe(() => {
          this.resetValue(this.value, true);
        });
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
        if (visibleIf.hasOwnProperty(dependencyPath)) {
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
    this.cd(true);
  }
}

export abstract class PropertyGroup extends FormProperty {
  properties: { [key: string]: FormProperty } | FormProperty[] | null = null;

  getProperty(path: string): FormProperty | undefined {
    const subPathIdx = path.indexOf(SF_SEQ);
    const propertyId = subPathIdx !== -1 ? path.substring(0, subPathIdx) : path;

    let property = (this.properties as { [key: string]: FormProperty })[propertyId];
    if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
      const subPath = path.substring(subPathIdx + 1);
      property = (property as PropertyGroup).getProperty(subPath)!;
    }
    return property;
  }

  forEachChild(fn: (formProperty: FormProperty, str: string) => void): void {
    for (const propertyId in this.properties) {
      if (this.properties.hasOwnProperty(propertyId)) {
        const property = (this.properties as { [key: string]: FormProperty })[propertyId];
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
